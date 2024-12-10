<?php

namespace TSFM\Frontend;

use TSFM\Frontend\Shortcodes\TsfmApp;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here, TINKY WINKY!!'); // Exit if accessed directly.
}

class Shortcode
{
	public static function load_shortcodes(): void
	{
		add_shortcode('tsfm_app', [TsfmApp::class, 'load']);
	}
}