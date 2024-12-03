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
	const CHAT_POPUP_APP_ID = 'tsfm_chat_popup_app_id';

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
	 * Retrieve the Chat Popup App ID option value
	 *
	 * @return string|null
	 */
	public static function getChatPopupAppId(): ?string
	{
		return get_option(self::CHAT_POPUP_APP_ID);
	}
}
