<?php

/**
 * Plugin Name:     Accordion Toggle
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Display Your FAQs & Improve User Experience with Accordion/Toggle block.
 * Version:         1.2.1
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     accordion-toggle
 *
 * @package         accordion-toggle
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

define('ACCORDION_BLOCK_VERSION', "1.2.1");
define('ACCORDION_BLOCK_ADMIN_URL', plugin_dir_url(__FILE__));
define('ACCORDION_BLOCK_ADMIN_PATH', dirname(__FILE__));

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';
require_once __DIR__ . '/includes/helpers.php';

function create_block_accordion_block_init()
{
	$script_asset_path = ACCORDION_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "block/testimonial" block first.'
		);
	}
	$script_asset = require($script_asset_path);
	$all_dependencies = array_merge($script_asset['dependencies'], array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-block-editor',
		'accordion-block-controls-util',
		'essential-blocks-eb-animation'
	));

	$index_js     = ACCORDION_BLOCK_ADMIN_URL . 'dist/index.js';
	wp_register_script(
		'create-block-accordion-block-editor',
		$index_js,
		$all_dependencies,
		$script_asset['version'],
		true
	);

	$frontend_js = ACCORDION_BLOCK_ADMIN_URL . 'dist/frontend/index.js';
	wp_register_script(
		'essential-blocks-accordion-frontend',
		$frontend_js,
		array(),
		ACCORDION_BLOCK_VERSION,
		true
	);

	$load_animation_js = ACCORDION_BLOCK_ADMIN_URL . 'assets/js/eb-animation-load.js';
	wp_register_script(
		'essential-blocks-eb-animation',
		$load_animation_js,
		array("jquery"),
		ACCORDION_BLOCK_VERSION,
		true
	);

	$animate_css = ACCORDION_BLOCK_ADMIN_URL . 'assets/css/animate.min.css';
	wp_register_style(
		'essential-blocks-animation',
		$animate_css,
		array(),
		ACCORDION_BLOCK_VERSION
	);

	wp_register_style(
		'fontpicker-default-theme',
		ACCORDION_BLOCK_ADMIN_URL . 'assets/css/fonticonpicker.base-theme.react.css',
		array(),
		ACCORDION_BLOCK_VERSION,
		"all"
	);

	wp_register_style(
		'fontpicker-matetial-theme',
		ACCORDION_BLOCK_ADMIN_URL . 'assets/css/fonticonpicker.material-theme.react.css',
		array(),
		ACCORDION_BLOCK_VERSION,
		"all"
	);

	wp_register_style(
		'fontawesome-frontend-css',
		ACCORDION_BLOCK_ADMIN_URL . 'assets/css/font-awesome5.css',
		array(),
		ACCORDION_BLOCK_VERSION,
		"all"
	);

	$style_css = ACCORDION_BLOCK_ADMIN_URL . 'dist/style.css';
	wp_register_style(
		'accordion-toggle-style-css',
		$style_css,
		array(
			'fontpicker-default-theme',
			'fontpicker-matetial-theme',
			'fontawesome-frontend-css',
			'essential-blocks-animation',
		),
		filemtime(ACCORDION_BLOCK_ADMIN_PATH . '/dist/style.css')
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/accordion')) {
		register_block_type(
			Accordion_Helper::get_block_register_path("accordion-toggle/accordion-toggle", ACCORDION_BLOCK_ADMIN_PATH),
			array(
				'editor_script' => 'create-block-accordion-block-editor',
				'editor_style' => 'accordion-toggle-style-css',
				'render_callback' => function ($attributes, $content) {
					if (!is_admin()) {
						wp_enqueue_style('fontawesome-frontend-css');
						wp_enqueue_style('essential-blocks-animation');
						wp_enqueue_script('essential-blocks-accordion-frontend');
						wp_enqueue_script('essential-blocks-eb-animation');
					}
					return $content;
				}
			)
		);
	}
}

add_action('init', 'create_block_accordion_block_init', 99);
