<?php

namespace TSFM\RESTApi;

use TSFM\Models\App;
use TSFM\ThreadManager;
use WP_Error;
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
		$app_id = $request->get_param('app_id');
		$locale = $request->get_param('locale');
		$post_id = $request->get_param('post_id');

		if (empty($app_id)) {
			return $this->send_error_response('App ID is required');
		}

		if (empty($locale)) {
			return $this->send_error_response('Locale is required');
		}

		$app = App::get_app_by_id($app_id);
		if (!$app) {
			return $this->send_error_response('App not found');
		}

		if ($app->has_posts && empty($post_id)) {
			return $this->send_error_response('Post ID is required when app has posts enabled');
		}

		if (!$app->has_posts) {
			$post_id = 0;
		}

		$create_thread = ThreadManager::create_thread(app_id: $app_id, locale: $locale, post_id: $post_id);
		if ($create_thread instanceof WP_Error) {
			return $this->send_error_response($create_thread->get_error_message(), $create_thread->get_error_code(), $create_thread->get_error_data());
		}

		return new WP_REST_Response([
			'success' => true,
			'thread_data' => $create_thread,
		], 200);
	}

}
