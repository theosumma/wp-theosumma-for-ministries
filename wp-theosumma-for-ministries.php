<?php
/*
Plugin Name: TheoSumma For Ministries
Plugin URI: https://theosumma.com/
Description: TheoSumma For Ministries plugin integrates the TheoSumma platform with WordPress.
Version: 1.11
Author: Bisharah Estephan
Requires at least: 4.9
Tested up to: 6.7
Requires PHP: 7.4
Author URI: https://boshdev.com/
*/

if (!defined('ABSPATH')) {
	echo 'This is a WordPress plugin and cannot be executed directly.';
	exit;
}

// Include Composer autoload if it exists
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
	require_once __DIR__ . '/vendor/autoload.php';
}

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
register_activation_hook(__FILE__, [\TSFM\Init::class, 'activate']);
if ( is_admin() ) {
	new \TSFM\PluginUpdater();
}

