<?php
/**
 * Plugin Name:     Accordion Toggle
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Display Your FAQs & Improve User Experience with Accordion/Toggle block.
 * Version:         1.0.5
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

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_accordion_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/accordion" block first.'
		);
	}

	$index_js = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'accordion-toggle-accordion-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
		),
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'accordion-toggle-accordion-editor-style',
		plugins_url($editor_css, __FILE__),
		array('accordion-toggle-accordion-block', 'fontawesome-frontend-css'),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'accordion-toggle-accordion-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	$fontawesome_css = 'lib/resources/css/font-awesome5.css';
	wp_register_style(
		'fontawesome-frontend-css',
		plugins_url( $fontawesome_css, __FILE__),
		array(),
		filemtime( "$dir/$fontawesome_css" )
	);

	$frontend_js = 'src/frontend.js';
	wp_register_script(
		'accordion-toggle-accordion-frontend',
		plugins_url( $frontend_js, __FILE__),
		array( "jquery","wp-editor"),
		true
	);

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/accordion' ) ) {
		register_block_type( 'accordion-toggle/accordion', array(
			'editor_script' => 'accordion-toggle-accordion-block-editor',
			'editor_style'  => 'accordion-toggle-accordion-editor-style',
			'render_callback' => function( $attributes, $content ) {
				if( !is_admin() ) {
					wp_enqueue_style('accordion-toggle-accordion-block');
					wp_enqueue_style('fontawesome-frontend-css');
					wp_enqueue_script('accordion-toggle-accordion-frontend');
				}
				return $content;
			}
		));
	}
}
add_action( 'init', 'create_block_accordion_block_init' );
