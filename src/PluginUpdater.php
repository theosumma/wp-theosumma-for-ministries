<?php

namespace TSFM;

use WP_Error;

class PluginUpdater {
	private const GITHUB_REPO = 'https://api.github.com/repos/theosumma/wp-theosumma-for-ministries/releases/latest';
	private const PLUGIN_SLUG = 'theosumma-for-ministries';
	private const PLUGIN_FILE = 'wp-theosumma-for-ministries/wp-theosumma-for-ministries.php';

	public function __construct() {
		add_filter('pre_set_site_transient_update_plugins', [$this, 'check_for_updates']);
		add_filter('plugins_api', [$this, 'plugin_info'], 10, 3);
		add_filter('upgrader_post_install', [$this, 'tsfm_plugin_upgrader_post_install'], 10, 3);
	}

	public function check_for_updates($transient) {
		if ( empty( $transient->checked ) ) {
			return $transient;
		}

		$response = wp_remote_get(self::GITHUB_REPO, [
			'headers' => [
				'User-Agent' => 'WordPress Plugin',
				'Accept'     => 'application/vnd.github.v3+json',
			]
		]);

		if ( is_wp_error( $response ) ) {
			return $transient;
		}

		$data = json_decode( wp_remote_retrieve_body( $response ) );
		if ( ! isset( $data->tag_name ) ) {
			return $transient;
		}

		$new_version = ltrim( $data->tag_name, 'v' );

		if ( ! function_exists( 'get_plugin_data' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
		$plugin_file   = WP_PLUGIN_DIR . '/' . self::PLUGIN_FILE;
		$plugin_data   = get_plugin_data( $plugin_file );
		$current_version = $plugin_data['Version'];

		if ( version_compare( $new_version, $current_version, '>' ) ) {
			$package = $data->zipball_url ?? ''; // Using GitHub's automatic zipball URL

			$transient->response[self::PLUGIN_FILE] = (object) [
				'slug'        => self::PLUGIN_SLUG,
				'new_version' => $new_version,
				'package'     => $package,
				'url'         => $data->html_url,
			];
		}

		return $transient;
	}

	public function plugin_info($res, $action, $args) {
		if ( $action !== 'plugin_information' || $args->slug !== self::PLUGIN_SLUG ) {
			return $res;
		}

		$response = wp_remote_get(self::GITHUB_REPO, [
			'headers' => [
				'User-Agent' => 'WordPress Plugin',
				'Accept'     => 'application/vnd.github.v3+json',
			]
		]);

		if ( is_wp_error( $response ) ) {
			return $res;
		}

		$data = json_decode( wp_remote_retrieve_body( $response ) );
		if ( ! isset( $data->tag_name ) ) {
			return $res;
		}

		$package = $data->zipball_url ?? '';

		return (object) [
			'name'         => 'TheoSumma For Ministries',
			'slug'         => self::PLUGIN_SLUG,
			'version'      => ltrim( $data->tag_name, 'v' ),
			'author'       => '<a href="https://theosumma.com/">Bisharah Estephan</a>',
			'homepage'     => 'https://theosumma.com/',
			'download_link'=> $package,
			'requires'     => '5.0',
			'tested'       => '6.4',
			'sections'     => [
				'description' => $data->body ?? 'TheoSumma plugin for WordPress.',
			],
		];
	}

	public function tsfm_plugin_upgrader_post_install($response, $hook_extra, $result) {
		// Check if this update is for our plugin
		if ( ! empty($hook_extra['plugin']) && strpos($hook_extra['plugin'], 'wp-theosumma-for-ministries.php') !== false ) {
			// Set the correct destination folder (adjust if necessary)
			$correct_destination = WP_PLUGIN_DIR . '/wp-theosumma-for-ministries';

			// If the folder name does not match, rename it
			if ( $result['destination'] !== $correct_destination ) {
				// Rename the folder
				rename($result['destination'], $correct_destination);
				// Update the destination in the response
				$result['destination'] = $correct_destination;
			}
		}

		return $result;
	}
}
