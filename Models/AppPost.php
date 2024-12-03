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
	 * Create or sync a relation between app_id and post_id.
	 *
	 * @param string $app_id
	 * @param int $post_id
	 * @return void
	 */
	public static function sync_relation(string $app_id, int $post_id): void
	{
		global $wpdb;
		$table_name = self::get_table_name();
		$wpdb->replace(
			$table_name,
			[
				'app_id' => $app_id,
				'post_id' => $post_id,
				'is_synced' => 1,
				'created_at' => current_time('mysql'),
				'updated_at' => current_time('mysql'),
			]
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
}
