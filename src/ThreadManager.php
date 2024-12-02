<?php

namespace TSFM;

use TSFM\RESTApi\Setup;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class ThreadManager
{
	/**
	 * Create Thread from an external service.
	 *
	 * @return string|null The thread information if the request was successful, or null on failure.
	 */
	public static function create_thread($locale): ?string
	{
		$api_key = SettingsManager::getApiKey();
		$app_id = SettingsManager::getAppId();

		if (empty($api_key)) {
			error_log('ThreadManager Error: API key not set.');
			return null;
		}
		if (empty($app_id)) {
			error_log('ThreadManager Error: App ID not set.');
			return null;
		}

		$endpoint = Setup::endpoint('create_thread', [
			'workflow_id' => $app_id,
			'locale' => $locale
		]);
		if (!$endpoint || empty($endpoint->url) || empty($endpoint->method)) {
			error_log('CreateThread Error: Invalid endpoint.');
			return null;
		}

		// Send the POST request
		$response = wp_remote_post($endpoint->url, [
			'method' => $endpoint->method,
			'headers' => [
				'Content-Type' => 'application/json',
				Setup::API_KEY_HEADER => $api_key, // Include API key as header
			],
			'timeout' => 10,
		]);

		// Check for errors in the response
		if (is_wp_error($response)) {
			error_log('ThreadManager Error: ' . $response->get_error_message());
			return null;
		}

		// Decode the response body
		$response_body = wp_remote_retrieve_body($response);
		$data = json_decode($response_body, true);

		// thread_id and created_at
		if (!empty($data['thread_id']) && !empty($data['created_at'])) {
			return json_encode([
				'thread_id' => $data['thread_id'],
				'created_at' => $data['created_at'],
			]);
		}

		error_log('ThreadManager Error: Invalid response data.');
		return null;
	}
}
