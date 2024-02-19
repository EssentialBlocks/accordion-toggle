<?php

/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package essential-blocks
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

function create_block_accordion_block_init()
{
    // Skip block registration if Gutenberg is not enabled/merged.
    if (!function_exists('register_block_type')) {
        return;
    }

    $dir = dirname(__FILE__);

    $frontend_dependencies = include_once ACCORDION_BLOCK_ADMIN_PATH . '/dist/frontend/index.asset.php';

    //  Frontend Script
    wp_register_script(
        'essential-blocks-accordion-frontend',
        ACCORDION_BLOCK_ADMIN_URL . 'dist/frontend/index.js',
        array_merge($frontend_dependencies['dependencies'],['essential-blocks-controls-frontend']),
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

add_action('init', 'create_block_accordion_block_init');
