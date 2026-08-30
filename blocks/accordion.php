<?php

/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package essential-blocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

// Renamed from the unprefixed `create_block_accordion_block_init` emitted by the
// @wordpress/create-block scaffold — any other plugin built from that scaffold
// declares the same name and triggers a fatal redeclare. The function_exists()
// guard stays as belt-and-braces.
if (!function_exists('accordion_toggle_accordion_block_init')) {
    function accordion_toggle_accordion_block_init()
    {
        // Skip block registration if Gutenberg is not enabled/merged.
        if (!function_exists('register_block_type')) {
            return;
        }

        $frontend_asset = Accordion_Helper::get_asset_file('/dist/frontend/index.asset.php');

        //  Frontend Script
        wp_register_script(
            'essential-blocks-accordion-frontend',
            ACCORDION_BLOCK_ADMIN_URL . 'dist/frontend/index.js',
            array_merge($frontend_asset['dependencies'], ['essential-blocks-controls-frontend']),
            ACCORDION_BLOCK_VERSION,
            true
        );

        if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/accordion')) {
            register_block_type(
                Accordion_Helper::get_block_register_path("accordion-toggle"),
                array(
                    'render_callback' => function ($attributes, $content) {
                        if (!is_admin()) {
                            wp_enqueue_style('dashicons');
                            wp_enqueue_style('eb-accordion-toggle-frontend-style');
                            wp_enqueue_style('essential-blocks-fontawesome');
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

    add_action('init', 'accordion_toggle_accordion_block_init');
}
