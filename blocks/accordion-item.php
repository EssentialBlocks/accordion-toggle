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
function accordion_toggle_accordion_item_block_init()
{
    // Skip block registration if Gutenberg is not enabled/merged.
    if (!function_exists('register_block_type')) {
        return;
    }
    $dir = dirname(__FILE__);

    if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/accordion')) {
        register_block_type(Accordion_Helper::get_block_register_path("accordion-item"));
    }
}
add_action('init', 'accordion_toggle_accordion_item_block_init');
