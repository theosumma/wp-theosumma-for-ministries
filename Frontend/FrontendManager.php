<?php

namespace TSFM\Frontend;

use TSFM\SettingsManager;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here, TINKY WINKY!!'); // Exit if accessed directly.
}

class FrontendManager
{
	public static function load(): void
	{
		if (is_admin() || (defined('DOING_AJAX') && DOING_AJAX) || SettingsManager::isDevelopmentMode()) {
			return; // if admin dashboard or AJAX
		}
		add_action('wp_enqueue_scripts', [self::class, 'enqueue_scripts']); // Frontend scripts
		add_action('wp_footer', [self::class, 'add_chat_button']);
	}

	public static function enqueue_scripts(): void
	{
		wp_enqueue_script('jquery');
		wp_enqueue_script('tsfm-main-script', TSFM_PLUGIN_URL . 'assets/frontend/main.js', ['jquery'], null, true);
		wp_enqueue_style('tsfm-main-style', TSFM_PLUGIN_URL . 'assets/frontend/main.css');

		// Localize script to pass nonce and REST API endpoint
		wp_localize_script('tsfm-main-script', 'tsfmData', [
			'nonce' => wp_create_nonce('wp_rest'),
			'locale' => get_locale(),
			'authEndpoint' => rest_url('tsfm/v1/auth'),
			'threadEndpoint' => rest_url('tsfm/v1/threads'),
			'theosummaFrontendUrl' => THEOSUMMA_FRONTEND_URL,
		]);
	}

	public static function add_chat_button(): void
	{
		?>
        <!-- Chat Button -->
        <div id="tsfm-chat-button" style="display: none">
            <span id="tsfm-open-chat">
                <img src="<?= TSFM_PLUGIN_URL . '/assets/images/logo.svg' ?>" alt="TheoSumma AI" width="50" height="50">
            </span>
        </div>

        <!-- Modal Container -->
        <div id="tsfm-modal-container" class="hidden">
            <div class="modal-background">
                <div class="modal d-flex flex-column" style="height: 90%">
                    <div class="tsfm-chat-header" style="height: 7%">
                        <span><?php bloginfo('title'); ?></span>
                        <div id="tsfm-action-btns-wrapper">
                            <button id="tsfm-new-chat">New Chat</button>
                            <button id="tsfm-close-chat">
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">

                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#fff"
                                              stroke-width="1.5" stroke-linecap="round"/>
                                        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                                              stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                                    </g>

                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="tsfm-chat-body" style="height: 93%">
                        <!-- Chat content goes here -->
                        <iframe id="ts-chat-widget-iframe" width="100%" height="100%"
                                src="<?= THEOSUMMA_FRONTEND_URL ?>"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

		<?php
	}
}
