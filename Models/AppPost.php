<?php

namespace TSFM\Models;

class AppPost
{
	/**
	 * Get the table name with prefix.
	 *
	 * @return string
	 */
	public static function get_table_name(): string
	{
		global $wpdb;
		return $wpdb->prefix . 'tsfm_app_posts';
	}

	/**
	 * Creates the tsfm_app_posts table in the WordPress database.
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
		    post_id BIGINT(20) UNSIGNED NOT NULL,
		    post_type VARCHAR(255) NOT NULL,
		    is_synced TINYINT(1) NOT NULL DEFAULT 0,
		    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		    PRIMARY KEY (ID),
		    UNIQUE INDEX idx_app_post (app_id, post_id),
		    CONSTRAINT fk_app FOREIGN KEY (app_id) REFERENCES {$wpdb->prefix}tsfm_apps(app_id) ON DELETE CASCADE ON UPDATE CASCADE,
		    CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES {$wpdb->prefix}posts(ID) ON DELETE CASCADE ON UPDATE CASCADE
		) $charset_collate;";


		require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		dbDelta($sql);
	}

	/**
	 * Create a relation between app_id and post_id.
	 *
	 * @param string $app_id
	 * @param int $post_id
	 * @return int|bool The number of rows inserted or false on failure.
	 */
	public static function create_relation(string $app_id, int $post_id)
	{
		global $wpdb;
		$table_name = self::get_table_name();
		return $wpdb->replace(
			$table_name,
			[
				'app_id' => $app_id,
				'post_id' => $post_id,
				'post_type' => get_post_type($post_id),
				'is_synced' => 0,
				'created_at' => current_time('mysql'),
				'updated_at' => current_time('mysql'),
			]
		);
	}

	/**
	 * Create bulk relation between app_id and posts for a specific post_type.
	 *
	 * @param string $app_id
	 * @param string $post_type
	 * @return void
	 */
	public static function create_bulk_relation(string $app_id, string $post_type): void
	{
		global $wpdb;
		$table_name = self::get_table_name();

		// Fetch all posts of the specified post type
		$posts = get_posts([
			'post_type' => $post_type,
			'numberposts' => -1,
			'fields' => 'ids', // Get only IDs for efficiency
			'status' => 'publish',
		]);

		if (empty($posts)) {
			return; // No posts found for the given post type
		}

		$current_time = current_time('mysql');

		// Prepare bulk insert/update data
		$values = [];
		$placeholders = [];
		foreach ($posts as $post_id) {
			$values[] = $app_id;
			$values[] = $post_id;
			$values[] = $post_type;
			$values[] = 0; // is_synced default to 0
			$values[] = $current_time;
			$values[] = $current_time;

			$placeholders[] = "(%s, %d, %s, %d, %s, %s)";
		}

		// Generate the SQL for bulk insert or update
		// TODO: check whether you want to update the existing records as well
		$sql = "
	        INSERT INTO $table_name (app_id, post_id, post_type, is_synced, created_at, updated_at)
	        VALUES " . implode(', ', $placeholders) . "
	        ON DUPLICATE KEY UPDATE
	        post_type = VALUES(post_type),
	        is_synced = VALUES(is_synced),
	        updated_at = VALUES(updated_at)
	    ";

		// Execute the query
		$wpdb->query($wpdb->prepare($sql, $values));
	}

	/**
	 * Sync a relation (set is_synced to true) between app_id and post_id.
	 *
	 * @param string $app_id
	 * @param int $post_id
	 * @return int|bool The number of rows updated or false on failure.
	 */
	public static function sync_relation(string $app_id, int $post_id)
	{
		global $wpdb;
		$table_name = self::get_table_name();
		return $wpdb->update(
			$table_name,
			['is_synced' => 1, 'updated_at' => current_time('mysql')],
			['app_id' => $app_id, 'post_id' => $post_id]
		);
	}

	/**
	 * Unsync a relation (set is_synced to false) between app_id and post_id.
	 *
	 * @param string $app_id
	 * @param int $post_id
	 * @return void
	 */
	public static function unsync_relation(string $app_id, int $post_id): void
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$wpdb->update(
			$table_name,
			['is_synced' => 0, 'updated_at' => current_time('mysql')],
			['app_id' => $app_id, 'post_id' => $post_id]
		);
	}

	/**
	 * Unsync all relations by app_id (set is_synced to false).
	 *
	 * @param string $app_id
	 * @return void
	 */
	public static function unsync_all_by_app_id(string $app_id): void
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$wpdb->update(
			$table_name,
			['is_synced' => 0, 'updated_at' => current_time('mysql')],
			['app_id' => $app_id]
		);
	}

	/**
	 * Delete all relations by app_id.
	 *
	 * @param string $app_id
	 * @return void
	 */
	public static function delete_by_app_id(string $app_id): void
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$wpdb->delete(
			$table_name,
			['app_id' => $app_id]
		);
	}

	/**
	 * Retrieve all posts related to an app by app_id.
	 *
	 * @param string $app_id
	 * @param bool|null $is_synced (optional) - filter by sync status
	 * @return array
	 */
	public static function get_posts_by_app_id(string $app_id, ?bool $is_synced = null): array
	{
		global $wpdb;
		$table_name = self::get_table_name();

		$query = "SELECT post_id FROM $table_name WHERE app_id = %s";
		$params = [$app_id];

		if (!is_null($is_synced)) {
			$query .= " AND is_synced = %d";
			$params[] = (int)$is_synced;
		}

		$results = $wpdb->get_results($wpdb->prepare($query, $params));

		return array_map(function ($row) {
			return $row->post_id;
		}, $results);
	}

	/**
	 * Retrieve all posts types related to an app by app_id.
	 * @param string $app_id
	 * @return array
	 * */
	public static function get_post_types_by_app_id(string $app_id): array
	{
		global $wpdb;
		$table_name = self::get_table_name();

		$query = "SELECT post_type FROM $table_name WHERE app_id = %s GROUP BY post_type";
		$params = [$app_id];

		$results = $wpdb->get_results($wpdb->prepare($query, $params));

		return array_map(function ($row) {
			return $row->post_type;
		}, $results);
	}

	/**
	 * Get joined posts by app_id and post_type.
	 * @param string $app_id
	 * @param string $post_type
	 * @return array
	 */
	/**
	 * Get joined posts by app_id and post_type.
	 * @param string $app_id
	 * @param string $post_type
	 * @return array
	 */
	public static function get_joined_synced_posts_by_app_id_and_post_type(string $app_id, string $post_type): array
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$query = "
	    SELECT t.post_id, p.post_title FROM $table_name as t
	    INNER JOIN $wpdb->posts as p ON t.post_id = p.ID
	    WHERE t.app_id = %s AND t.post_type = %s AND t.is_synced = 1
	    ";
		$params = [$app_id, $post_type];

		return $wpdb->get_results($wpdb->prepare($query, $params));
	}


	// get count of unsynced posts by app_id for each post-type
	public static function get_unsynced_post_counts_by_app_id(string $app_id): array
	{
		global $wpdb;
		$table_name = self::get_table_name();

		$query = "SELECT post_type, COUNT(*) as unsynced_count FROM $table_name WHERE app_id = %s AND is_synced = 0 GROUP BY post_type";
		$params = [$app_id];

		$results = $wpdb->get_results($wpdb->prepare($query, $params));

		return array_map(function ($row) {
			return ['post_type' => $row->post_type, 'unsynced_count' => $row->unsynced_count];
		}, $results);
	}

	public static function get_total_post_counts_by_app_id(string $app_id): array
	{
		global $wpdb;
		$table_name = self::get_table_name();

		$query = "SELECT post_type, COUNT(*) as posts_count FROM $table_name WHERE app_id = %s GROUP BY post_type";
		$params = [$app_id];

		$results = $wpdb->get_results($wpdb->prepare($query, $params));

		return array_map(function ($row) {
			return ['post_type' => $row->post_type, 'posts_count' => $row->posts_count];
		}, $results);
	}
}
