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
class Delete extends BaseAPI
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
		return WP_REST_Server::DELETABLE; // POST
	}


	public function execute(WP_REST_Request $request): WP_REST_Response
	{
		// validate if locale is provided
		$app_id = (string) $request->get_param('app-id');

		if (empty($app_id)) {
			return $this->send_error_response('APP ID is required', 400);
		}

		if (empty(App::get_app_by_id($app_id))) {
			return $this->send_error_response('The App does not exists', 400);
		}

		if (!App::delete_app_by_app_id($app_id)) {
			return $this->send_error_response('Failed to delete the app', 400);
		} else {
			return new WP_REST_Response([
				'success' => true,
			], 200);
		}

	}

}
