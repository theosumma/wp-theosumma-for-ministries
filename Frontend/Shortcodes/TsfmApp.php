<?php

namespace TSFM\Frontend\Shortcodes;

use TSFM\SettingsManager;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here, TINKY WINKY!!'); // Exit if accessed directly.
}

class TsfmApp
{
	public static $atts = [];

	public static function load($atts)
	{
		if (is_admin() || (defined('DOING_AJAX') && DOING_AJAX) || SettingsManager::isDevelopmentMode()) {
			return ''; // if admin dashboard or AJAX
		}

		// Merge shortcode attributes with defaults
		$atts = shortcode_atts([
			'app-id' => '', // No default value; required attribute
		], $atts, 'tsfm_app');

		// Check if 'app-id' is provided and not empty
		if (empty($atts['app-id'])) {
			// Optionally, you can log an error or notify the admin
			// error_log('tsfm_app shortcode requires an "app-id" attribute.');
			return ''; // Do not load the shortcode
		} else {
			$atts['app-id'] = sanitize_text_field($atts['app-id']);
		}

		self::$atts = $atts; // Store the attributes for later use


		// Directly enqueue scripts here
		self::enqueue_scripts();
		return self::render(); // Render the shortcode
	}

	public static function enqueue_scripts(): void
	{
		wp_enqueue_script('jquery');
		wp_enqueue_script('tsfm-app-shortcode-script', TSFM_PLUGIN_URL . 'Frontend/Shortcodes/assets/tsfm-app-shortcode.js', ['jquery'], null, true);
		wp_enqueue_style('tsfm-app-shortcode-style', TSFM_PLUGIN_URL . 'Frontend/Shortcodes/assets/tsfm-app-shortcode.css');

		// Localize script to pass nonce and REST API endpoint
		wp_localize_script('tsfm-app-shortcode-script', 'tsfmAppShortcodeData', [
			'nonce' => wp_create_nonce('wp_rest'),
			'locale' => get_locale(),
			'appId' => self::$atts['app-id'],
			'authEndpoint' => rest_url('tsfm/v1/auth'),
			'threadEndpoint' => rest_url('tsfm/v1/threads'),
			'theosummaFrontendUrl' => THEOSUMMA_FRONTEND_URL,
		]);
	}

	public static function render()
	{
		// You can process $atts if needed
		ob_start();
		?>
        <div id="tsfm-app-shortcode-container" style="height: 70vh">
            <div class="tsfm-app-shortcode-chat-body" style="height: 100%">
                <!-- Chat content goes here -->
                <iframe id="ts-chat-widget-iframe" width="100%" height="100%"
                        src="<?= THEOSUMMA_FRONTEND_URL ?>"
                ></iframe>
            </div>
        </div>

		<?php
		return ob_get_clean();

	}

}