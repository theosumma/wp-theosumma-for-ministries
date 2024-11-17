<?php

namespace TSFM\Admin\Pages;

if (!defined('ABSPATH')) {
	exit('You are not allowed to get here.');
}

abstract class BasePage
{
	protected string $page_title;
	protected string $menu_title;
	protected string $capability;
	public string $menu_slug;
	protected ?string $parent_slug;
	protected ?string $icon_url;
	protected ?int $position;

	/**
	 * Constructor to initialize the page properties.
	 *
	 * @param string $page_title The text to be displayed in the title tags of the page when the menu is selected.
	 * @param string $menu_title The text to be used for the menu.
	 * @param string $capability The capability required for this menu to be displayed to the user.
	 * @param string $menu_slug The slug name to refer to this menu by (should be unique for this menu).
	 * @param string|null $parent_slug The slug name for the parent menu (or null for top-level).
	 * @param string|null $icon_url The URL to the icon to be used for this menu.
	 * @param int|null $position The position in the menu order this one should appear.
	 */
	public function __construct(
		string  $page_title,
		string  $menu_title,
		string  $capability,
		string  $menu_slug,
		?string $parent_slug = null,
		?string $icon_url = null,
		?int    $position = null
	)
	{
		$this->page_title = $page_title;
		$this->menu_title = $menu_title;
		$this->capability = $capability;
		$this->menu_slug = $menu_slug;
		$this->parent_slug = $parent_slug;
		$this->icon_url = $icon_url;
		$this->position = $position;
	}

	/**
	 * Register the admin page with WordPress.
	 */
	abstract public function register(): void;

	/**
	 * Render the page content.
	 */
	abstract public function render(): void;

	/**
	 * Enqueue scripts specific to this admin page.
	 */
	public function enqueue_scripts(): void
	{
		// Default implementation does nothing. Override in child classes if needed.
	}

	/**
	 * Enqueue styles specific to this admin page.
	 */
	public function enqueue_styles(): void
	{
		// Default implementation does nothing. Override in child classes if needed.
	}

	/**
	 * Hook into WordPress to add the menu.
	 */
	public function addMenuPage(): void
	{
		if ($this->parent_slug === null) {
			// Top-level menu
			add_menu_page(
				$this->page_title,
				$this->menu_title,
				$this->capability,
				$this->menu_slug,
				[$this, 'render'],
				$this->icon_url ?? 'dashicons-admin-generic',
				$this->position ?? null
			);
		} else {
			// Submenu page
			add_submenu_page(
				$this->parent_slug,
				$this->page_title,
				$this->menu_title,
				$this->capability,
				$this->menu_slug,
				[$this, 'render']
			);
		}
	}
}
