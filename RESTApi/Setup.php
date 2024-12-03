<?php


namespace TSFM\RESTApi;

use TSFM\RESTApi\App\Create as CreateApp;
use TSFM\RESTApi\App\Delete as DeleteApp;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class Setup
{
	// ipconfig getifaddr en0
	const API_KEY_HEADER = 'X-API-Key';

	const TS_API_ENDPOINTS = [
		'token' => [
			'method' => 'POST',
			'path' => '/tenant-token',
		],
		'create_thread' => [
			'method' => 'POST',
			'path' => '/{workflow_id}/threads/{locale}',
		],
		'check_app_exists' => [
			'method' => 'GET',
			'path' => '/apps/{app_id}',
		],
		'create_app' => [
			'method' => 'POST',
			'path' => '/apps/{app_id}',
		]
	];

	/**
	 * Load all API classes and register their routes.
	 */
	public static function load(): void
	{
		// List all REST API classes here
		$apis = [
			Auth::class,
			CreateThread::class,

			// App CRUD Endpoints
			CreateApp::class,
			DeleteApp::class,
		];

		foreach ($apis as $api_class) {
			if (class_exists($api_class)) {
				new $api_class();
			}
		}
	}

	/**
	 * Retrieve external API endpoint configuration with dynamic parameter replacement.
	 *
	 * @param string $endpoint_name The name of the endpoint.
	 * @param array $params Associative array of parameters to replace in the endpoint path.
	 *
	 * @return object|null
	 */
	public static function endpoint(string $endpoint_name, array $params = []): ?object
	{
		if (!isset(self::TS_API_ENDPOINTS[$endpoint_name])) {
			return null;
		}

		// Get the path from the endpoint configuration
		$path = self::TS_API_ENDPOINTS[$endpoint_name]['path'];

		// Replace placeholders in the path with values from $params
		foreach ($params as $key => $value) {
			$path = str_replace("{" . $key . "}", $value, $path);
		}

		// Build the full URL with the updated path
		$full_url = THEOSUMMA_API_URL . $path;

		return (object) [
			'url'    => $full_url,
			'method' => self::TS_API_ENDPOINTS[$endpoint_name]['method'],
			'path'   => $path,
		];
	}

}
