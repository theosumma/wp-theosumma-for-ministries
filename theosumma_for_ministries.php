<?php
/*
Plugin Name: TheoSumma For Ministries
Plugin URI: https://theosumma.com/
Description: TheoSumma For Ministries plugin integrates the TheoSumma platform with WordPress.
Version: 1.0
Author: Bisharah Estephan
Author URI: https://boshdev.com/
*/

if (!defined('ABSPATH')) {
	echo 'This is a WordPress plugin and cannot be executed directly.';
	exit;
}

define('TSFM_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('TSFM_PLUGIN_URL', plugin_dir_url(__FILE__));
//const THEOSUMMA_FRONTEND_URL = 'https://wp.theosumma.com/wp-chat-widget/';
const THEOSUMMA_FRONTEND_URL = 'http://192.168.68.110:5173/wp-chat-widget/';
//const THEOSUMMA_API_URL = 'https://mt-dev-api.theosumma.com/api/v1/wp';
const THEOSUMMA_API_URL = 'http://192.168.68.110:8000/api/v1/wp';

// Autoload classes following the TSFM namespace
spl_autoload_register(function ($class) {
	// Only proceed if the class belongs to the TSFM namespace
	if (!str_starts_with($class, 'TSFM\\')) {
		return;
	}

	// Remove the TSFM namespace prefix
	$class = str_replace('TSFM\\', '', $class);

	// Check if it's in the src directory first
	$src_file = __DIR__ . "/src/$class.php";
	if (file_exists($src_file)) {
		include_once $src_file;
		return;
	}

	$class = str_replace('\\', '/', $class);

	$file = __DIR__ . "/$class.php";
	if (file_exists($file)) {
		include_once $file;
		return;
	}
});


// Initialize the plugin
\TSFM\Init::get_instance();
