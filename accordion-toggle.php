<?php

/**
 * Plugin Name:     Accordion Toggle
 * Plugin URI:         https://essential-blocks.com
 * Description:     Display Your FAQs & Improve User Experience with Accordion/Toggle block.
 * Version:         1.3.0
 * Author:          WPDeveloper
 * Author URI:         https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     accordion-toggle
 * Requires at least: 5.6
 * Requires PHP:    7.2
 * Tested up to:    7.1
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

define( 'ACCORDION_BLOCK_VERSION', "1.3.0" );
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
        add_action( 'enqueue_block_assets', [$this, 'block_canvas_assets'] );

        // Load All Block Files
        $this->load_block_dependencies();
    }

    public function enqueue_block_assets() {
        global $pagenow;
        /**
         * Scripts
         */
        $controls_dependencies = Accordion_Helper::get_asset_file( '/dist/modules.asset.php' );
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
						'fontAwesome' => "true",
            /**
             * StyleComponent builds the editor preview's media queries from this.
             * Without it the editor emitted `@media all and (max-width: undefinedpx)`
             * and silently discarded every tablet/mobile rule, so responsive settings
             * showed no effect in the editor while working on the front end.
             */
            'responsiveBreakpoints' => Accordion_Helper::get_responsive_breakpoints(),
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

        $script_asset     = Accordion_Helper::get_asset_file( '/dist/index.asset.php' );
        $all_dependencies = array_merge( $script_asset['dependencies'], [
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

    /**
     * Assets for the block editor canvas.
     *
     * Since WP 6.3 the post editor renders block content inside an iframe.
     * `_wp_get_iframed_editor_assets()` (wp-includes/block-editor.php) builds that
     * iframe's stylesheet list by replaying the `enqueue_block_assets` action only —
     * anything enqueued on `enqueue_block_editor_assets` stays in the outer admin
     * document and never reaches the canvas.
     *
     * EBDisplayIcon renders the dashicon set as <span class="dashicons dashicons-x">,
     * which needs core's `dashicons` stylesheet for the @font-face and the :before
     * glyph. wp-admin loads dashicons for the outer document as part of the
     * concatenated load-styles.php admin bundle, which the canvas does not inherit,
     * so a selected dashicon rendered as a 0x0 span with no glyph. Font Awesome was
     * unaffected because it is a plugin stylesheet that does reach the canvas.
     *
     * The front end enqueues dashicons from the accordion block's render_callback in
     * blocks/accordion.php, so it is only needed here for the editor.
     */
    public function block_canvas_assets() {
        if ( ! is_admin() ) {
            return;
        }

        wp_enqueue_style( 'dashicons' );

        /**
         * dist/style.css carries `display:flex` for .eb-accordion-title-content-wrap,
         * the row that holds the title prefix, the title and the suffix. It was
         * registered below but never enqueued anywhere, so the row fell back to
         * `display:block` and every flex property generated for it — justify-content
         * from "Title Align", gap from "Prefix Suffix Spacing", and the
         * flex-direction / align-items from "Prefix & Title Layout" — had no effect.
         *
         * Passing $src here as well makes this independent of hook order: the canvas
         * pass runs before frontend_backend_assets() has registered the handle, and
         * wp_enqueue_style() ignores $src when the handle already exists.
         */
        wp_enqueue_style(
            'eb-accordion-toggle-frontend-style',
            ACCORDION_BLOCK_ADMIN_URL . 'dist/style.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

        /**
         * Icon fonts for the canvas.
         *
         * These two are declared as dependencies of `accordion-toggle-editor-css`
         * (dist/modules.css) further up, which is enough for the outer admin document.
         * The iframed canvas resolves its own asset list from this hook, and a
         * dependency of a handle that was never enqueued in this pass is not pulled
         * in, so Font Awesome never reached the canvas: the accordion's dropdown
         * arrow, `<i class="fas fa-angle-right eb-accordion-icon">`, fell back to the
         * theme font with `::before { content: none }` and collapsed to zero height.
         *
         * Enqueued with $src for the same reason as the stylesheet above -- this pass
         * runs before frontend_backend_assets() has registered the handles, and
         * wp_enqueue_style() ignores $src for a handle that already exists.
         */
        wp_enqueue_style(
            'essential-blocks-fontawesome',
            ACCORDION_BLOCK_ADMIN_URL . 'assets/css/fontawesome/css/all.min.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
        );

        wp_enqueue_style(
            'essential-blocks-iconpicker-css',
            ACCORDION_BLOCK_ADMIN_URL . 'dist/style-modules.css',
            [],
            ACCORDION_BLOCK_VERSION,
            'all'
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

    /**
     * Warn an administrator when the style-handler submodule is absent.
     *
     * Runs on `admin_notices`, so the translation calls happen well after
     * `init` (loading them earlier triggers a _doing_it_wrong notice on WP 6.7+).
     */
    public function style_handler_missing_notice() {
        if ( ! current_user_can( 'activate_plugins' ) ) {
            return;
        }

        printf(
            '<div class="notice notice-error"><p><strong>%s</strong> %s</p><p><code>git submodule update --init --recursive</code></p></div>',
            esc_html__( 'Accordion Toggle:', 'accordion-toggle' ),
            esc_html__( 'the bundled style-handler library is missing, so block styles will not be generated and the front end will render unstyled. If this is a development checkout, initialise the git submodules:', 'accordion-toggle' )
        );
    }

    private function load_block_dependencies() {
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/font-loader.php';
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/post-meta.php';

        // `lib/style-handler` is a git submodule; guard so an uninitialised
        // submodule degrades instead of fataling the whole site.
        //
        // It is NOT optional: it turns each block's `blockMeta` attribute into
        // the generated stylesheet under uploads/eb-style/. Without it the
        // editor still looks right (it computes styles in JS) but the front end
        // renders completely unstyled. Surface a notice rather than failing
        // silently — a silent skip here is very hard to diagnose.
        $style_handler = ACCORDION_BLOCK_ADMIN_PATH . '/lib/style-handler/style-handler.php';
        if ( file_exists( $style_handler ) ) {
            require_once $style_handler;
        } else {
            add_action( 'admin_notices', [$this, 'style_handler_missing_notice'] );
        }

        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/helpers.php';
        require_once ACCORDION_BLOCK_ADMIN_PATH . '/includes/class-faq-schema.php';
        if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/accordion' ) ) {
            require_once ACCORDION_BLOCK_ADMIN_PATH . '/blocks/accordion.php';
            require_once ACCORDION_BLOCK_ADMIN_PATH . '/blocks/accordion-item.php';
        }
    }
}
EBAccordionToggle::get_instance();
