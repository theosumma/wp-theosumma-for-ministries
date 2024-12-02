<?php

namespace TSFM;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class TokenManager
{
	/**
	 * Fetch a JWT token from the external service.
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

		$jwt_token = self::create_jwt_token($api_key);

		if (empty($jwt_token)) {
			error_log('TokenManager Error: Failed to generate JWT token.');
			return null;
		}

		return $jwt_token;
	}

	/**
	 * Get current user ID if user is authenticated, else generate anonymous UUID.
	 * The user_id will have a 'USER_' or 'ANONYMOUS_' prefix.
	 *
	 * @return array The sub info containing user_id and user_type.
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
			'exp' => time() + (60 * 60 * 24), // Token valid for 1 hour
		];
	}

	/**
	 * Create a JWT token using the provided API key.
	 *
	 * @param string $api_key The API key used to sign the JWT.
	 *
	 * @return string The generated JWT token, or an empty string on failure.
	 */
	public static function create_jwt_token(string $api_key): string
	{
		// Fetch user-specific info to include in the JWT payload
		$sub_info = self::get_sub_info();

		// Define the payload for the JWT
		$payload = [
			'sub' => json_encode([
				'user_id' => $sub_info['user_id'],
				'user_type' => $sub_info['user_type'],
			]),
			'iss' => $sub_info['iss'],     // Issuer (your site's URL)
			'iat' => $sub_info['iat'],     // Issued At (current timestamp)
			'exp' => $sub_info['exp'],     // Expiration time
		];

		// Generate the JWT using the API key as the signing key
		try {
			// Ensure you're using the correct version of firebase/php-jwt
			// For versions >= 6.0, the second parameter should be a Key instance
			$jwt_token = JWT::encode($payload, $api_key, 'HS256');
		} catch (\Exception $e) {
			error_log('TokenManager Error: Failed to generate JWT token. ' . $e->getMessage());
			return '';
		}

		return $jwt_token;
	}
}
