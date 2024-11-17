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
                <iframe id="ts-chat-widget-iframe" width="100%" height="100%"></iframe>
                <div id="ts-chat-placeholder">
                    <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/> </g>

                    </svg>
                </div>
            </div>
        </div>
		<?php
	}
}
