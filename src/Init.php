<?php

namespace TSFM;

use TSFM\Admin\AdminManager;
use TSFM\Frontend\FrontendManager; // Assuming you have a FrontendManager
use TSFM\RESTApi\Setup as RESTAPISetup;


if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class Init
{
	private static ?Init $instance = null;

	private function __construct()
	{
		RESTAPISetup::load(); // Load REST API functionalities
		AdminManager::load(); // Load admin functionalities
		FrontendManager::load(); // Load frontend functionalities
	}

	public static function get_instance(): ?Init
	{
		if (self::$instance === null) {
			self::$instance = new Init();
		}
		return self::$instance;
	}
}
