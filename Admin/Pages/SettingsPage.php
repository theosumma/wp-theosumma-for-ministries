<?php

namespace TSFM\Admin\Pages;

use TSFM\Models\App;
use TSFM\SettingsManager;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

class SettingsPage extends BasePage
{
	public function __construct()
	{
		parent::__construct(
			'TheoSumma For Ministries Settings', // Page Title
			'Settings',                           // Menu Title
			'manage_options',                     // Capability
			'tsfm_settings',                      // Menu Slug
			'tsfm_main_menu'                      // Parent slug (main menu)
		);
	}

	/**
	 * Register the settings page and settings.
	 */
	public function register(): void
	{
		$this->addMenuPage();

		// Hook into admin_init to register settings
		add_action('admin_init', [$this, 'registerSettings']);
	}

	/**
	 * Register settings, sections, and fields.
	 */
	public function registerSettings(): void
	{
		// Register settings for both options
		register_setting('tsfm_options', SettingsManager::OPTION_TSFM_APP_ID);
		register_setting('tsfm_options', SettingsManager::OPTION_TSFM_API_KEY);
		register_setting('tsfm_options', SettingsManager::OPTION_DEVELOPMENT_MODE);
		register_setting('tsfm_options', SettingsManager::CHAT_POPUP_APP_ID);

		add_settings_section(
			'tsfm_main_section',
			'Main Settings',
			[$this, 'renderMainSection'],
			'tsfm_settings'
		);

		// Add APP ID field
		add_settings_field(
			SettingsManager::OPTION_TSFM_APP_ID,
			'APP ID',
			[$this, 'renderAppIdField'],
			'tsfm_settings',
			'tsfm_main_section'
		);

		// Add API Key field
		add_settings_field(
			SettingsManager::OPTION_TSFM_API_KEY,
			'API Key',
			[$this, 'renderApiKeyField'],
			'tsfm_settings',
			'tsfm_main_section'
		);

		// Add Development Mode field
		add_settings_field(
			SettingsManager::OPTION_DEVELOPMENT_MODE,
			'Development Mode',
			[$this, 'renderDevelopmentModeField'],
			'tsfm_settings',
			'tsfm_main_section'
		);
		// Add Chat Popup App ID field
		add_settings_field(
			SettingsManager::CHAT_POPUP_APP_ID,
			'Chat Popup App',
			[$this, 'renderChatPopupAppIdField'],
			'tsfm_settings',
			'tsfm_main_section'
		);
	}

	/**
	 * Render the main settings section.
	 */
	public function renderMainSection(): void
	{
		echo '<p>Main settings for TheoSumma For Ministries plugin.</p>';
	}

	/**
	 * Render the settings page.
	 */
	public function render(): void
	{
		?>
        <div class="wrap">
            <h1><?php echo esc_html($this->page_title); ?></h1>
            <form method="post" action="options.php">
				<?php
				settings_fields('tsfm_options');
				do_settings_sections('tsfm_settings');
				submit_button();
				?>
            </form>
        </div>
		<?php
	}

	/**
	 * Render the APP ID input field.
	 */
	public function renderAppIdField(): void
	{
		$value = esc_attr(SettingsManager::getAppId());
		echo '<input type="text" name="' . esc_attr(SettingsManager::OPTION_TSFM_APP_ID) . '" value="' . $value . '" class="regular-text">';
	}

	/**
	 * Render the API Key input field.
	 */
	public function renderApiKeyField(): void
	{
		$value = esc_attr(SettingsManager::getApiKey());
		echo '<input type="text" name="' . esc_attr(SettingsManager::OPTION_TSFM_API_KEY) . '" value="' . $value . '" class="regular-text">';
	}

	/**
	 * Render the Development Mode checkbox field.
	 */
	public function renderDevelopmentModeField(): void
	{
		$checked = SettingsManager::isDevelopmentMode() ? 'checked' : '';
		echo '<input type="checkbox" name="' . esc_attr(SettingsManager::OPTION_DEVELOPMENT_MODE) . '" value="1" ' . $checked . '> Enable Development Mode';
	}
    /**
     * Render the Chat Popup App ID input field as select dropdown.
     */
    public function renderChatPopupAppIdField(): void
    {
        $app = App::get_all_apps();
        if(empty($app)){
            echo "<p>To use this functionality, you must create an application in Manage TheoSumma Apps page.</p>";
	        return;
        }

	    $options = [
		    '' => 'Select an App to activate this feature'
	    ];
        foreach ($app as $app_item) {
            $options[$app_item->app_id] = $app_item->title;
        }

        $selected = esc_attr(SettingsManager::getChatPopupAppId());
        echo '<select name="'.esc_attr(SettingsManager::CHAT_POPUP_APP_ID).'">';
        foreach ($options as $key => $value) {
            echo '<option value="'.esc_attr($key).'"'.selected($key, $selected, false).'>'.$value.'</option>';
        }
        echo '</select>';
    }
}
