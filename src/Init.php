<?php

namespace TSFM;

use TSFM\Admin\AdminManager;
use TSFM\Frontend\FrontendManager;

// Assuming you have a FrontendManager
use TSFM\RESTApi\Setup as RESTAPISetup;


if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class Init
{
	private static ?Init $instance = null;

	private static function loadEnv(string $env_file): void
	{
		$lines = file($env_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		foreach ($lines as $line) {
			// Ignore lines that are comments
			if (strpos(trim($line), '#') === 0) {
				continue;
			}

			// Split the line into key and value
			[$key, $value] = explode('=', $line, 2);
			$key = trim($key);
			$value = trim($value);

			// Set the environment variable if not already defined
			if (!defined($key)) {
				define($key, $value);
			}
		}
	}

	private static function constants(): void
	{
		$plugin_init_file = dirname(__FILE__, 2) . '/wp-theosumma-for-ministries.php';

		// Define static constants
		define('TSFM_PLUGIN_FILE', $plugin_init_file);
		define('TSFM_PLUGIN_BASE_NAME', plugin_basename($plugin_init_file));
		define('TSFM_PLUGIN_DIR', plugin_dir_path($plugin_init_file));
		define('TSFM_PLUGIN_URL', plugin_dir_url($plugin_init_file));
		define('TSFM_TEXT_DOMAIN', 'theosumma-for-ministries');

		// Check for .env file and define dynamic constants
		$env_file = TSFM_PLUGIN_DIR . '.env';
		if (file_exists($env_file)) {
			// Load .env file
			self::loadEnv($env_file);
		} else {
			// Set default constants
			define('TSFM_ENV', 'production');
			define('THEOSUMMA_FRONTEND_URL', 'https://wp.theosumma.com/wp-chat-widget/');
			define('THEOSUMMA_API_URL', 'https://mt-dev-api.theosumma.com/api/v1/wp');
		}
	}

	private function __construct()
	{
		self::constants(); // Define constants
		RESTAPISetup::load(); // Load REST API functionalities
		AdminManager::load(); // Load admin functionalities
		FrontendManager::load(); // Load frontend functionalities
	}

	public static function get_instance(): ?Init
	{
		if (self::$instance === null) {
			self::$instance = new Init();
		}
		return self::$instance;
	}
}
