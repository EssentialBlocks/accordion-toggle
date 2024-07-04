<?php

/**
 * Plugin Name:     Accordion Toggle
 * Plugin URI:         https://essential-blocks.com
 * Description:     Display Your FAQs & Improve User Experience with Accordion/Toggle block.
 * Version:         1.2.9
 * Author:          WPDeveloper
 * Author URI:         https://wpdeveloper.net
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

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'ACCORDION_BLOCK_VERSION', "1.2.9" );
define( 'ACCORDION_BLOCK_ADMIN_URL', plugin_dir_url( __FILE__ ) );
define( 'ACCORDION_BLOCK_ADMIN_PATH', dirname( __FILE__ ) );

class EBAccordionToggle {

    protected static $_instance = null;

    public static function get_instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    private function __construct() {

        // enqueue script and
        add_action( 'enqueue_block_editor_assets', [$this, 'enqueue_block_assets'], 100 );
        add_action( 'enqueue_block_editor_assets', [$this, 'frontend_backend_assets'], 100 );
        add_action( 'wp_enqueue_scripts', [$this, 'frontend_backend_assets'], 100 );

        // Load All Block Files
        $this->load_block_dependencies();
    }

    public function enqueue_block_assets() {
        global $pagenow;
        /**
         * Scripts
         */
        $controls_dependencies = include_once ACCORDION_BLOCK_ADMIN_PATH . '/dist/modules.asset.php';
        wp_register_script(
            "eb-accordion-toggle-controls-util",
            ACCORDION_BLOCK_ADMIN_URL . '/dist/modules.js',
            $controls_dependencies['dependencies'],
            $controls_dependencies['version'],
            true
        );

        wp_localize_script( 'eb-accordion-toggle-controls-util', 'EssentialBlocksLocalize', [
            'eb_wp_version' => (float) get_bloginfo( 'version' ),
            'rest_rootURL'  => get_rest_url(),
						'fontAwesome' => "true"
        ] );

        if ( $pagenow == 'post-new.php' || $pagenow == 'post.php' ) {
            wp_localize_script( 'eb-accordion-toggle-controls-util', 'eb_conditional_localize', [
                'editor_type' => 'edit-post'
            ] );
        } else if ( $pagenow == 'site-editor.php' || $pagenow == 'themes.php' ) {
            wp_localize_script( 'eb-accordion-toggle-controls-util', 'eb_conditional_localize', [
                'editor_type' => 'edit-site'
            ] );
        }

        wp_enqueue_style(
            'accordion-toggle-editor-css',
            ACCORDION_BLOCK_ADMIN_URL . '/dist/modules.css',
            [
								'essential-blocks-fontawesome',
								'essential-blocks-iconpicker-css'
            ],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

        $script_asset_path = ACCORDION_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
        $script_asset      = require $script_asset_path;
        $all_dependencies  = array_merge( $script_asset['dependencies'], [
            'wp-blocks',
            'wp-i18n',
            'wp-element',
            'wp-block-editor',
            'eb-accordion-toggle-controls-util',
            'essential-blocks-eb-animation'
        ] );

        wp_enqueue_script(
            'eb-accordion-toggle-editor',
            ACCORDION_BLOCK_ADMIN_URL . 'dist/index.js',
            $all_dependencies,
            ACCORDION_BLOCK_VERSION,
            true
        );
    }

    public function frontend_backend_assets() {
        /**
         * Enqueue resources for Animation ||Start||
         */
				wp_register_script(
            'essential-blocks-controls-frontend',
            ACCORDION_BLOCK_ADMIN_URL . 'dist/frontend.js',
            [],
            ACCORDION_BLOCK_VERSION,
            true
        );
        //Animate JS
        wp_enqueue_script(
            'essential-blocks-eb-animation',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/js/eb-animation-load.js',
            [],
            ACCORDION_BLOCK_VERSION,
            true
        );

        //Animate CSS
        wp_enqueue_style(
            'essential-blocks-animation',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/css/animate.min.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );
        /**
         * Enqueue resources for Animation ||End||
         */

        //Blocks Common Style from Dist
        wp_register_style(
            'eb-accordion-toggle-frontend-style',
            ACCORDION_BLOCK_ADMIN_URL . 'dist/style.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

        wp_register_style(
            'essential-blocks-fontawesome',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/css/fontawesome/css/all.min.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

        wp_register_style(
            'fontpicker-default-theme',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/css/fonticonpicker.base-theme.react.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

        wp_register_style(
            'fontpicker-material-theme',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/css/fonticonpicker.material-theme.react.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

				wp_register_style(
					'essential-blocks-iconpicker-css',
					ACCORDION_BLOCK_ADMIN_URL . 'dist/style-modules.css',
					[],
          ACCORDION_BLOCK_VERSION,
          'all'
				);

        wp_register_style(
            'essential-blocks-hover-css',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/css/hover-min.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

        wp_register_style(
            'hover-effects-style',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/css/hover-effects.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );
    }

    private function load_block_dependencies() {
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/font-loader.php';
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/post-meta.php';
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/lib/style-handler/style-handler.php';
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/helpers.php';
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/class-faq-schema.php';
        if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/accordion' ) ) {
            require_once ACCORDION_BLOCK_ADMIN_PATH . '/blocks/accordion.php';
            require_once ACCORDION_BLOCK_ADMIN_PATH . '/blocks/accordion-item.php';
        }
    }
}
EBAccordionToggle::get_instance();
