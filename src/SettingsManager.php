<?php

namespace TSFM;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class SettingsManager
{
	const OPTION_TSFM_APP_ID = 'tsfm_app_id';
	const OPTION_TSFM_API_KEY = 'tsfm_api_key';
	const OPTION_DEVELOPMENT_MODE = 'tsfm_development_mode';

	/**
	 * Retrieve the APP ID option value.
	 */
	public static function getAppId(): ?string
	{
		return get_option(self::OPTION_TSFM_APP_ID);
	}

	/**
	 * Retrieve the API key option value.
	 *
	 * @return string|null
	 */
	public static function getApiKey(): ?string
	{
		return get_option(self::OPTION_TSFM_API_KEY);
	}

	/**
	 * Retrieve the Development Mode option value
	 *
	 * @return bool
	 */
	public static function isDevelopmentMode(): bool
	{
		return (bool)get_option(self::OPTION_DEVELOPMENT_MODE, true);
	}

	/**
	 * Update the APP ID option value.
	 */
	public static function updateAppId(string $value): bool
	{
		return update_option(self::OPTION_TSFM_APP_ID, sanitize_text_field($value));
	}

	/**
	 * Update the API key option value.
	 *
	 * @param string $value
	 * @return bool
	 */
	public static function updateApiKey(string $value): bool
	{
		return update_option(self::OPTION_TSFM_API_KEY, sanitize_text_field($value));
	}

	/**
	 * Update the Development Mode option value.
	 *
	 * @param bool $value
	 * @return bool
	 */
	public static function updateDevelopmentMode(bool $value): bool
	{
		return update_option(self::OPTION_DEVELOPMENT_MODE, $value ? 1 : 0);
	}
}
