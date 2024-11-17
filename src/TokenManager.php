<?php

namespace TSFM;

use TSFM\RESTApi\Setup;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class TokenManager
{
	/**
	 * Fetch a JWT token from an external service.
	 *
	 * @return string|null The JWT token if the request was successful, or null on failure.
	 */
	public static function fetch_jwt_token(): ?string
	{
		$api_key = SettingsManager::getApiKey();

		if (empty($api_key)) {
			error_log('TokenManager Error: API key not set.');
			return null;
		}

		// Prepare the request body
		$body = [
			'api_key' => $api_key,
			'sub' => self::get_sub_info(),
		];

		$endpoint = Setup::endpoint('token');
		if (!$endpoint || empty($endpoint->url) || empty($endpoint->method)) {
			error_log('TokenManager Error: Invalid endpoint.');
			return null;
		}

		// Send the POST request
		$response = wp_remote_post($endpoint->url, [
			'method' => $endpoint->method,
			'headers' => [
				'Content-Type' => 'application/json',
				Setup::API_KEY_HEADER => $api_key, // Include API key as header
			],
			'body' => json_encode($body),
			'timeout' => 10,
		]);

		// Check for errors in the response
		if (is_wp_error($response)) {
			error_log('TokenManager Error: ' . $response->get_error_message());
			return null;
		}

		// Decode the response body
		$response_body = wp_remote_retrieve_body($response);
		$data = json_decode($response_body, true);

		// Check if the token exists in the response data
		if (isset($data['jwt_token'])) {
			return $data['jwt_token'];
		}

		// Log an error if the token was not received
		error_log('TokenManager Error: JWT token not found in response.');
		return null;
	}

	/**
	 * Get current user ID if user is authenticated, else generate anonymous UUID. there should be user_ or anonymous_ prefix in user_id.
	 *
	 * @return array The sub info containing user_id and is_user flag.
	 */
	public static function get_sub_info(): array
	{
		$user_id = get_current_user_id();
		$user_type = 'ANONYMOUS';
		if ($user_id > 0) {
			$user_type = 'USER';
		} else {
			$user_id = wp_generate_uuid4();
		}
		return [
			'user_id' => $user_id,
			'user_type' => $user_type,
			'iss' => get_site_url(),
			'iat' => time(),
			'exp' => time() + (60 * 60 * 24 * 8), // Token valid for 1 hour TODO: to be changed once refresh token strategy is implemented
		];
	}
}
