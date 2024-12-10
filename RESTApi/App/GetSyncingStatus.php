<?php

namespace TSFM\RESTApi\App;

use TSFM\Models\App;
use TSFM\Models\AppPost;
use TSFM\RESTApi\BaseAPI;
use TSFM\RESTApi\Setup;
use TSFM\SettingsManager;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

/**
 * CreateThread REST API endpoint for create new TheoSumma Threads
 */
class GetSyncingStatus extends BaseAPI
{
	/**
	 * Get the endpoint name.
	 *
	 * @return string
	 */
	protected function endpoint_name(): string
	{
		return '/app/(?P<app_id>[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/syncing-status';
	}

	protected function method(): string
	{
		return WP_REST_Server::READABLE;
	}

	/**
	 * Define custom route arguments, including 'app_id'.
	 *
	 * @return array
	 */
	protected function custom_route_args(): array
	{
		return [
			'args' => [
				'app_id' => [
					'description' => 'The UUID of the app.',
					'type' => 'string',
					'required' => true,
					'validate_callback' => [$this, 'validate_uuid'],
					'sanitize_callback' => 'sanitize_text_field',
				],
			],
		];
	}

	/**
	 * Validate that the provided string is a valid UUID.
	 *
	 * @param mixed $param The parameter value.
	 * @param WP_REST_Request $request The current request object.
	 * @param string $key The parameter key.
	 *
	 * @return bool
	 */
	public function validate_uuid($param, $request, $key): bool
	{
		return $this->is_valid_uuid($param);
	}

	/**
	 * Check if a string is a valid UUID.
	 *
	 * @param string $uuid The string to validate.
	 *
	 * @return bool
	 */
	private function is_valid_uuid(string $uuid): bool
	{
		return preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i', $uuid) === 1;
	}


	public function execute(WP_REST_Request $request): WP_REST_Response
	{
		// validate if locale is provided
		$app_id = (string)$request->get_param('app_id');

		if (empty($app_id)) {
			return $this->send_error_response('APP ID is required', 400);
		}

		$check_app_exists = App::get_app_by_id($app_id);
		if (!$check_app_exists) {
			return $this->send_error_response('APP does not exists', 400);
		}

		$prepared_posts = AppPost::get_total_post_counts_by_app_id($app_id);
		$unsyced_posts = AppPost::get_unsynced_post_counts_by_app_id($app_id);
		$data = [];
		foreach ($prepared_posts as $row) {
			if (empty($row['post_type']))
				continue;
			$data[$row['post_type']] = [
				'total_posts' => (int) $this->get_total_posts_by_type($row['post_type']),
				'total_prepared_posts' => (int) $row['posts_count'] ?? 0,
			];
		}
		foreach ($unsyced_posts as $row) {
			if (empty($row['post_type']))
				continue;
			$data[$row['post_type']]['unsynced_posts'] = (int) $row['unsynced_count'] ?? 0;
		}

		return new WP_REST_Response([
			'success' => true,
			'post_types' => !empty($data) ? $data : [],
		], 200);
	}

	private static function get_total_posts_by_type($post_type)
	{
		$count_posts = wp_count_posts($post_type);
		return $count_posts->publish ?? 0;
	}

	protected function is_admin_route(): bool
	{
		return true;
	}


}
