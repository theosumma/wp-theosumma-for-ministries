<?php

namespace TSFM\RESTApi\App;

use TSFM\Models\App;
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
class Create extends BaseAPI
{
	private string $api_key = '';

	/**
	 * Get the endpoint name.
	 *
	 * @return string
	 */
	protected function endpoint_name(): string
	{
		return '/app';
	}

	protected function method(): string
	{
		return WP_REST_Server::CREATABLE; // POST
	}


	public function execute(WP_REST_Request $request): WP_REST_Response
	{
		// validate if locale is provided
		$app_id = $request->get_param('app-id');

		if (empty($app_id)) {
			return $this->send_error_response('APP ID is required', 400);
		}

		$check_app_exists = App::get_app_by_id($app_id);
		if ($check_app_exists) {
            return $this->send_error_response('APP already exists', 400);
        }

		$this->api_key = SettingsManager::getApiKey();
		if (empty($this->api_key)) {
			return $this->send_error_response('API key not set', 400);
		}

		$endpoint = Setup::endpoint('check_app_exists', [
			'app_id' => $app_id,
		]);

		if (!$endpoint || empty($endpoint->url) || empty($endpoint->method)) {
			return $this->send_error_response('Invalid TS API endpoint', 400);
		}

		// Send the POST request
		$response = wp_remote_get($endpoint->url, [
			'method' => $endpoint->method,
			'headers' => [
				'Content-Type' => 'application/json',
				Setup::API_KEY_HEADER => $this->api_key, // Include API key as header
			],
			'timeout' => 10,
		]);

		// Check for errors in the response
		if (is_wp_error($response)) {
			return $this->send_error_response($response->get_error_message(), 400);
		}

		// Decode the response body
		$response_body = wp_remote_retrieve_body($response);
		$app_data = json_decode($response_body, true);

		// check if not 200
		if ($response['response']['code'] != 200) {
			// check if $app_data['detail'] is string
			if (is_string($app_data['detail'])) {
				return $this->send_error_response($app_data['detail'], $response['response']['code']);
			} else {
				return $this->send_error_response('Failed to create app (A)', $response['response']['code']);
			}
		}

		if (
			!isset($app_data['app_id']) ||
			!isset($app_data['title'])
		) {
			return $this->send_error_response('Invalid app data', 400);
		}


		$new_app_id = $this->create_app($app_data);

		if ($new_app_id instanceof WP_REST_Response) {
			return $new_app_id;
		}

		$app = App::get_app($new_app_id);


		return new WP_REST_Response([
			'success' => true,
			'app_data' => $app,
		], 200);
	}

	private function create_app($app_data)
	{
		$new_app_id = App::create_app(
			$app_data['app_id'],
			$app_data['title'],
			$app_data['description'] ?? '',
			$app_data['has_posts'] ?? false,
			$app_data['accept_documents'] ?? false,
			$app_data['accept_welcome_message'] ?? false,
			$app_data['welcome_message_content'] ?? ''
		);

		if ($new_app_id instanceof \WP_Error) {
			return $this->send_error_response($new_app_id->get_error_message(), $new_app_id->get_error_code());
		}
		return $new_app_id;

	}

	protected function is_admin_route(): bool
	{
		return true;
	}

}
