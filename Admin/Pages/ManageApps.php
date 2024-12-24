<?php

namespace TSFM\Admin\Pages;

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
			'edit_posts',                // Capability
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
			'theosummaFrontendUrl' => THEOSUMMA_FRONTEND_URL,
			'nonce' => wp_create_nonce('wp_rest'),
			'locale' => get_locale(),
            'isAdministratorUser' => current_user_can('manage_options'),
			'restBaseEndpoint' => rest_url('wp/v2'),
			'postTypesEndpoint' => rest_url('wp/v2/types'),
			'authEndpoint' => rest_url('tsfm/v1/auth'),
			'threadEndpoint' => rest_url('tsfm/v1/threads'),
			'appCrudEndpoint' => rest_url('tsfm/v1/app'),
			'appRelatedPostTypesEndpoint' => rest_url('tsfm/v1/app/{app_id}/related-post-types'),
			'getAppPosts' => rest_url('tsfm/v1/app/{app_id}/{post_type}/posts'),
			'syncAppPosts' => rest_url('tsfm/v1/app/{app_id}/posts/{post_type}'),
			'syncingStatusEndpoint' => rest_url('tsfm/v1/app/{app_id}/syncing-status'),
		]);
	}

	/**
	 * Enqueue styles specific to the Manage Apps page.
	 */
	public function enqueue_styles(): void
	{
		wp_enqueue_style(
			'tsfm-manage-apps-style',
			TSFM_PLUGIN_URL . 'assets/admin-app/dist/manage-apps.css',
			[],
			'1.0'
		);
	}

	/**
	 * Render the Manage Apps page content.
	 */
	public function render(): void
	{
		// render the REACT App component
		?>
        <div id="tsfm-manage-apps" class="wrap"></div>
		<?php
	}
}
