<?php

namespace TSFM\Admin\Pages;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class MainMenuPage extends BasePage
{
	public function __construct()
	{
		parent::__construct(
			'TheoSumma For Ministries',    // Page Title
			'TheoSumma For Ministries',    // Menu Title
			'manage_options',              // Capability
			'tsfm_main_menu',              // Menu Slug
			null,                          // parent_slug null for top-level
			'dashicons-admin-generic',     // Icon URL
			25                             // Position
		);
	}

	/**
	 * Register the main menu page.
	 */
	public function register(): void
	{
		add_menu_page(
			$this->page_title,
			$this->menu_title,
			$this->capability,
			$this->menu_slug,
			[$this, 'render'], // Callback to redirect
			$this->icon_url,
			$this->position
		);

		// Optionally, remove the first submenu (duplicate of main menu)
		add_action('admin_menu', function () {
			remove_submenu_page($this->menu_slug, $this->menu_slug);
		}, 999);
	}

	/**
	 * Redirect to the settings page when main menu is accessed.
	 */
	public function render(): void
	{
		$settings_url = admin_url('admin.php?page=tsfm_settings');
		if (function_exists('wp_redirect')) {
			wp_redirect($settings_url);
			exit;
		}
	}
}
