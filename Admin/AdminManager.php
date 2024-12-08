<?php

namespace TSFM\Admin;

use TSFM\Admin\Pages\BasePage;
use TSFM\Admin\Pages\MainMenuPage;
use TSFM\Admin\Pages\ManageApps;
use TSFM\Admin\Pages\SettingsPage;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class AdminManager
{
	/**
	 * Array to hold instances of admin pages.
	 *
	 * @var BasePage[]
	 */
	private array $admin_pages = [];

	/**
	 * Load the admin manager.
	 */
	public static function load(): void
	{
		if (!is_admin()) {
			return; // Only load in admin dashboard
		}

		// Initialize the AdminManager instance
		$instance = new self();
		$instance->initialize();
	}

	/**
	 * Initialize admin pages and register actions.
	 */
	private function initialize(): void
	{
		// Instantiate admin pages
		$this->admin_pages[] = new MainMenuPage();
		$this->admin_pages[] = new ManageApps();
		$this->admin_pages[] = new SettingsPage();

		// Register menu pages
		add_action('admin_menu', [$this, 'registerMenuPages']);

		// Enqueue scripts and styles
		add_action('admin_enqueue_scripts', [$this, 'enqueueAdminAssets']);
	}

	/**
	 * Register menu pages.
	 */
	public function registerMenuPages(): void
	{
		// First, register the main menu
		foreach ($this->admin_pages as $page) {
			if ($page instanceof MainMenuPage) {
				$page->register();
			}
		}

		// Then, register submenus
		foreach ($this->admin_pages as $page) {
			if (!$page instanceof MainMenuPage) {
				$page->register();
			}
		}
	}

	/**
	 * Enqueue scripts and styles for the current admin page.
	 */
	public function enqueueAdminAssets(): void
	{
		$current_screen = get_current_screen();

		if (!$current_screen) {
			return;
		}

		foreach ($this->admin_pages as $page) {
			// Check if the current screen ID ends with the page's menu slug
			if (str_ends_with($current_screen->id, $page->menu_slug)) {
				$page->enqueue_scripts();
				$page->enqueue_styles();
			}
		}

	}
}
