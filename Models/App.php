<?php

namespace TSFM\Models;

class App
{
	/**
	 * Get the table name with prefix.
	 *
	 * @return string
	 */
	public static function get_table_name(): string
	{
		global $wpdb;
		return $wpdb->prefix . 'tsfm_apps';
	}

	/**
	 * Creates the tsfm_apps table in the WordPress database.
	 *
	 * @return void
	 */
	public static function create_table(): void
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE IF NOT EXISTS $table_name (
            ID INT NOT NULL AUTO_INCREMENT,
            app_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT NULL,
            has_posts TINYINT(1) NOT NULL DEFAULT 0,
            accept_documents TINYINT(1) NOT NULL DEFAULT 0,
            accept_welcome_message TINYINT(1) NOT NULL DEFAULT 0,
            welcome_message_content TEXT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (ID),
            UNIQUE INDEX idx_app_id (app_id)
        ) $charset_collate;";

		require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		dbDelta($sql);
	}

	/**
	 * Insert a new app record.
	 *
	 * @param string $app_id
	 * @param string $title
	 * @param string|null $description
	 * @param bool $has_posts
	 * @param bool $accept_documents
	 * @param bool $accept_welcome_message
	 * @param string|null $welcome_message_content
	 * @return int
	 */
	public static function create_app(
		string  $app_id,
		string  $title,
		?string $description = null,
		bool    $has_posts = false,
		bool    $accept_documents = false,
		bool    $accept_welcome_message = false,
		?string $welcome_message_content = null
	): int
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$wpdb->insert(
			$table_name,
			[
				'app_id' => $app_id,
				'title' => $title,
				'description' => $description,
				'has_posts' => (int)$has_posts,
				'accept_documents' => (int)$accept_documents,
				'accept_welcome_message' => (int)$accept_welcome_message,
				'welcome_message_content' => $welcome_message_content,
				'created_at' => current_time('mysql'),
				'updated_at' => current_time('mysql'),
			]
		);

		return $wpdb->insert_id;
	}

	/**
	 * Retrieve an app by ID.
	 *
	 * @param int $id
	 * @return object|null
	 */
	public static function get_app(int $id): ?object
	{
		global $wpdb;
		$table_name = self::get_table_name();

		$app = $wpdb->get_row($wpdb->prepare(
			"SELECT * FROM $table_name WHERE ID = %d",
			$id
		));

		if (!$app) {
			return null;
		}

		$app->ID = (int)$app->ID;
		$app->accept_welcome_message = (bool)$app->accept_welcome_message;
		$app->accept_documents = (bool)$app->accept_documents;
		$app->has_posts = (bool)$app->has_posts;
		return $app;
	}

	/**
	 * Retrieve an app by ID.
	 *
	 * @param string $app_id
	 * @return object|null
	 */
	public static function get_app_by_id(string $app_id): ?object
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$app = $wpdb->get_row($wpdb->prepare(
			"SELECT * FROM $table_name WHERE app_id = %s",
			$app_id
		));
		if (!$app) {
			return null;
		}
		$app->ID = (int)$app->ID;
		$app->accept_welcome_message = (bool)$app->accept_welcome_message;
		$app->accept_documents = (bool)$app->accept_documents;
		$app->has_posts = (bool)$app->has_posts;

		return $app;
	}

	/**
	 * Update an app record.
	 *
	 * @param int $id
	 * @param array $data
	 * @return void
	 */
	public static function update_app(int $id, array $data): void
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$wpdb->update(
			$table_name,
			$data,
			['ID' => $id]
		);
	}

	/**
	 * Delete an app record (soft delete not included in requirements).
	 *
	 * @param int $id
	 * @return void
	 */
	public static function delete_app(int $id)
	{
		global $wpdb;
		$table_name = self::get_table_name();
		return $wpdb->delete(
			$table_name,
			['ID' => $id]
		);
	}

	/**
	 * Delete an app record by app_id.
	 *
	 * @param int $id
	 * @return void
	 */
	public static function delete_app_by_app_id(string $id)
	{
		global $wpdb;
		$table_name = self::get_table_name();
		return $wpdb->delete(
			$table_name,
			['app_id' => $id]
		);
	}

	/**
	 * Get all apps with optional filters.
	 *
	 * @param array $filters
	 * @return array
	 */
	public static function get_all_apps(array $filters = []): array
	{
		global $wpdb;
		$table_name = self::get_table_name();

		// Base query
		$query = "SELECT * FROM $table_name WHERE 1=1";
		$query_params = [];

		if (!empty($filters)) {
			foreach ($filters as $column => $value) {
				// Sanitize column names
				$column = esc_sql($column);
				$query .= " AND {$column} = %s";
				$query_params[] = $value;
			}

			// Prepare only if we have parameters
			$query = $wpdb->prepare($query, ...$query_params);
		}

		return $wpdb->get_results($query);
	}

}
