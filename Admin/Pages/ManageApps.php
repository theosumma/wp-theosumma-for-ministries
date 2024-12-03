<?php

namespace TSFM\Admin\Pages;

use TSFM\Models\App;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class ManageApps extends BasePage
{
	public function __construct()
	{
		parent::__construct(
			'Manage Apps',                // Page Title
			'Manage Apps',                // Menu Title
			'manage_options',                // Capability
			'tsfm_manage_apps',           // Menu Slug
			'tsfm_main_menu'                 // Parent slug (main menu)
		);
	}

	/**
	 * Register the Manage Apps page.
	 */
	public function register(): void
	{
		$this->addMenuPage();
	}

	/**
	 * Enqueue scripts specific to the Manage Apps page.
	 */
	public function enqueue_scripts(): void
	{
		// Enqueue Bootstrap JS (requires Popper.js for tooltips, popovers, etc.)
		wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.2', true);

		wp_enqueue_script(
			'tsfm-manage-apps-script',
//			TSFM_PLUGIN_URL . 'assets/admin/js/manage-apps.js',
			TSFM_PLUGIN_URL . 'assets/admin-app/dist/manage-apps.js',
			['react', 'react-dom'],
			'1.0',
			true
		);

		// Localize script to pass nonce and REST API endpoint
		wp_localize_script('tsfm-manage-apps-script', 'tsfmData', [
			'nonce' => wp_create_nonce('wp_rest'),
			'locale' => get_locale(),
			'authEndpoint' => rest_url('tsfm/v1/auth'),
			'appCrudEndpoint' => rest_url('tsfm/v1/app')
		]);
	}

	/**
	 * Enqueue styles specific to the Manage Apps page.
	 */
	public function enqueue_styles(): void
	{
		// Enqueue Bootstrap CSS
		wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', array(), '5.3.2');

//		wp_enqueue_style(
//			'tsfm-manage-apps-style',
//			TSFM_PLUGIN_URL . 'assets/admin/css/manage-apps.css',
//			[],
//			'1.0'
//		);
	}

	/**
	 * Render the Manage Apps page content.
	 */
	public function render(): void
	{
		?>
        <h2 class="my-3">TheoSumma Apps Management</h2>
        <div id="tsfm-manage-apps" class="wrap">

        </div>
		<?php
	}
}
