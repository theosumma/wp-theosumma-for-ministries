<?php

namespace TSFM\Admin\Pages;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class TestTheosumma extends BasePage
{
	public function __construct()
	{
		parent::__construct(
			'Test TheoSumma',                // Page Title
			'Test TheoSumma',                // Menu Title
			'manage_options',                // Capability
			'tsfm_test_theosumma',           // Menu Slug
			'tsfm_main_menu'                 // Parent slug (main menu)
		);
	}

	/**
	 * Register the Test TheoSumma page.
	 */
	public function register(): void
	{
		$this->addMenuPage();
	}

	/**
	 * Enqueue scripts specific to the Test TheoSumma page.
	 */
	public function enqueue_scripts(): void
	{
		wp_enqueue_script(
			'tsfm-test-script',
			TSFM_PLUGIN_URL . 'assets/admin/js/test-theosumma.js',
			['jquery'],
			'1.0',
			true
		);

		// Localize script to pass nonce and REST API endpoint
		wp_localize_script('tsfm-test-script', 'tsfmData', [
			'nonce' => wp_create_nonce('wp_rest'),
			'locale' => get_locale(),
			'authEndpoint' => rest_url('tsfm/v1/auth'),
			'threadEndpoint' => rest_url('tsfm/v1/threads'),
			'theosummaFrontendUrl' => THEOSUMMA_FRONTEND_URL,
		]);
	}

	/**
	 * Enqueue styles specific to the Test TheoSumma page.
	 */
	public function enqueue_styles(): void
	{
		wp_enqueue_style(
			'tsfm-test-style',
			TSFM_PLUGIN_URL . 'assets/admin/css/test-theosumma.css',
			[],
			'1.0'
		);
	}

	/**
	 * Render the Test TheoSumma page content.
	 */
	public function render(): void
	{
		?>
        <div id="tsfm-test-theosumma" class="wrap">
            <div class="header-bar">
                <span>TheoSumma Test</span>
                <!--                <h1>--><?php //echo esc_html($this->page_title);
				?><!--</h1>-->
                <button id="tsfm-test-theosumma-new-chat">New Chat</button>
            </div>
            <div id="tsfm-iframe-wrapper">
                <iframe id="ts-chat-widget-iframe" width="100%" height="100%"
                        src="<?= THEOSUMMA_FRONTEND_URL ?>"
                ></iframe>
            </div>
        </div>
		<?php
	}
}
