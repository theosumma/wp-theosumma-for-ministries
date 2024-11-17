<?php

namespace TSFM\RESTApi;

use TSFM\ThreadManager;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

/**
 * CreateThread REST API endpoint for create new TheoSumma Threads
 */
class CreateThread extends BaseAPI
{
	/**
	 * Get the endpoint name.
	 *
	 * @return string
	 */
	protected function endpoint_name(): string
	{
		return '/threads';
	}

	protected function method(): string
	{
		return WP_REST_Server::CREATABLE; // POST
	}


	public function execute(WP_REST_Request $request): WP_REST_Response
	{
		// validate if locale is provided
		$locale = $request->get_param('locale');
		if (empty($locale)) {
            $this->send_error_response('Locale is required', 400);
            wp_die();
        }
		$create_thread = ThreadManager::create_thread($locale);
		if (empty($create_thread)){
			$this->send_error_response('Failed to create thread', 500);
			wp_die();
		}

		return new WP_REST_Response([
			'success' => true,
			'thread_data' => $create_thread,
		], 200);
	}

}
