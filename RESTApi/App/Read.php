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
class Read extends BaseAPI
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
		return WP_REST_Server::READABLE; // POST
	}


	public function execute(WP_REST_Request $request): WP_REST_Response
	{
		$apps = App::get_all_apps();

		foreach ($apps as $app) {
			$app->ID = (int) $app->ID;
			$app->accept_welcome_message = (bool) $app->accept_welcome_message;
			$app->accept_documents = (bool) $app->accept_documents;
			$app->has_posts = (bool) $app->has_posts;

		}

		return new WP_REST_Response([
			'success' => true,
			'apps' => !empty($apps) ? $apps : [],
		], 200);
	}

	protected function is_admin_route(): bool
	{
		return true;
	}

	public function allowed_capability(): string
	{
		return 'edit_posts';
	}

}
