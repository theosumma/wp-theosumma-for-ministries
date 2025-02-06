<?php

namespace TSFM;

use TSFM\RESTApi\Setup;
use WP_Error;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class ThreadManager
{
	/**
	 * Create Thread from an external service.
	 *
	 * @param string $app_id
	 * @param string $locale
	 * @param int $post_id
	 * @return string|WP_Error The thread information if the request was successful, or null on failure.
	 */
	public static function create_thread(string $app_id, string $locale = 'en', int $post_id = 0)
	{
		$api_key = SettingsManager::getApiKey();

		if (empty($api_key)) {
			return new WP_Error(500, 'ThreadManager Error: API key not set.');
		}
		if (empty($app_id)) {
			return new WP_Error(500, 'ThreadManager Error: App ID not provided.');
		}

		$endpoint = Setup::endpoint('create_thread', [
			'workflow_id' => $app_id
		]);

		if (!$endpoint || empty($endpoint->url) || empty($endpoint->method)) {
			return new WP_Error(500, 'ThreadManager Error: Missing endpoint.');
		}

		$body = [
			'locale' => $locale
		];
		if($post_id > 0){
            $body['external_entity_id'] = (string) $post_id;
        }

		// Send the POST request
		$response = wp_remote_post($endpoint->url, [
			'method' => $endpoint->method,
			'headers' => [
				'Content-Type' => 'application/json',
				Setup::API_KEY_HEADER => $api_key, // Include API key as header
			],
			'timeout' => 25,
			'body' => json_encode($body),
		]);

		// Check for errors in the response
		if (is_wp_error($response)) {
			return $response;
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

		return new WP_Error(500, 'ThreadManager Error: Invalid response data.', $data);
	}
}
