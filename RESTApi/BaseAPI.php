<?php

namespace TSFM\RESTApi;

use Exception;
use WP_REST_Server;
use WP_REST_Request;
use WP_REST_Response;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

/**
 * Abstract Base API class for registering REST API endpoints.
 */
abstract class BaseAPI
{
	/**
	 * The namespace for all REST API routes.
	 */
	const ROUTE_NAMESPACE = 'tsfm/v1';

	/**
	 * Constructor.
	 * Hooks the register_routes method to the rest_api_init action.
	 */
	public function __construct()
	{
		add_action('rest_api_init', [$this, 'register_routes']);
	}

	/**
	 * Register REST API routes.
	 * This method uses the endpoint name and arguments defined in the subclass.
	 * @throws Exception
	 */
	public function register_routes(): void
	{
		$route_name = $this->endpoint_name();
		$route_args = $this->get_route_args();

		// Ensure route_name and route_args are provided
		if (empty($route_name) || empty($route_args)) {
			return;
		}

		register_rest_route(
			self::ROUTE_NAMESPACE,
			$route_name,
			$route_args
		);
	}

	/**
	 * Get the endpoint name.
	 * Each subclass must implement this method to provide the endpoint path.
	 *
	 * @return string
	 */
	abstract protected function endpoint_name(): string;

	/**
	 * Get the route arguments.
	 * Each subclass can override this method to provide additional arguments for the endpoint.
	 *
	 * @return string
	 * @throws Exception
	 * */
	abstract protected function method(): string;

	/**
	 * Get any additional route arguments.
	 * This method can be overridden by subclasses to provide additional arguments for the endpoint.
	 *
	 * @return array
	 */
	protected function custom_route_args(): array
	{
		return [];
	}

	/**
	 * Execute the API endpoint.
	 * This method is called by the WordPress REST API framework.
	 *
	 * @param WP_REST_Request $request The current request.
	 * @return WP_REST_Response
	 * */
	abstract public function execute(WP_REST_Request $request): WP_REST_Response;

	/**
	 * Get the route arguments.
	 * Each subclass can override this method to provide additional arguments for the endpoint.
	 *
	 * @return array
	 *
	 * @throws Exception
	 */

	protected function get_route_args(): array
	{
		// check if $this->method() (string) in WP_REST_Server::ALLMETHODS (string)
		if (!str_contains(WP_REST_Server::ALLMETHODS, $this->method())) {
			// Throw an error if the method is not supported by the server
			throw new Exception("Method '{$this->method()}' is not supported by the server.");
		}


		$default_args = [
			'methods' => $this->method(),
			'callback' => [$this, 'execute'], // Default to the execute method
			'permission_callback' => [$this, 'default_permission_callback'], // Default permission callback
			'args' => [], // Placeholder for additional arguments
		];

		// Merge with any custom arguments from the subclass
		return array_merge($default_args, $this->custom_route_args());
	}

	/**
	 * Default permission callback.
	 * Can be overridden by subclasses if different permission checks are needed.
	 *
	 * @param WP_REST_Request $request The current request.
	 * @return bool
	 */
	public function default_permission_callback(WP_REST_Request $request): bool
	{
		$nonce = $request->get_header('X-WP-Nonce');

		if (!$nonce) {
			return false;
		}

		// Verify nonce using 'wp_rest' action
		if (!wp_verify_nonce($nonce, 'wp_rest')) {
			return false;
		}

		if (!current_user_can('manage_options')) {
			return false;
		}

		return true;
	}

	/**
	 * Utility method to send a standardized error response.
	 *
	 * @param string $message Error message.
	 * @param int $status HTTP status code.
	 * @return WP_REST_Response
	 */
	protected function send_error_response(string $message, int $status = 400): WP_REST_Response
	{
		return new WP_REST_Response([
			'success' => false,
			'message' => $message,
		], $status);
	}
}





