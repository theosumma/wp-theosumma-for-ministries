<?php

namespace TSFM\RESTApi;

use TSFM\TokenManager;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

/**
 * Auth REST API endpoint for generating JWT tokens.
 */
class Auth extends BaseAPI
{
	/**
	 * Get the endpoint name.
	 *
	 * @return string
	 */
	protected function endpoint_name(): string
	{
		return '/auth';
	}

	protected function method(): string
	{
		return WP_REST_Server::CREATABLE; // POST
	}


	public function execute(WP_REST_Request $request): WP_REST_Response
	{
		// Fetch JWT token using TokenManager
		$token = TokenManager::fetch_jwt_token();

		if (!$token) {
			return $this->send_error_response('Failed to generate JWT token.', 500);
		}

		return new WP_REST_Response([
			'success' => true,
			'token' => $token,
		], 200);
	}

}
