<?php

/**
 * Enqueue a script in the WordPress admin on edit.php.
 * @param int $hook Hook suffix for the current admin page.
 */
if ( !function_exists('essential_blocks_edit_post') ) {
    function essential_blocks_edit_post( $hook ) {
        global $post;
        if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
            $frontend_js = "metaStyle.js";
            wp_enqueue_script('essential-blocks-edit-post', plugins_url($frontend_js, __FILE__), array("jquery","wp-editor"), true);
        }
    }
    add_action( 'admin_enqueue_scripts', 'essential_blocks_edit_post' );
}

/**
 * Ajax Function to Update Meta for update style values
*/
if ( !function_exists('update_style_meta_ajax') ) {
    add_action('wp_ajax_update_style_meta', 'update_style_meta_ajax');
    function update_style_meta_ajax() {
        $post_id = $_POST['id'];
        //Update the database with the increased bid value
        update_post_meta($post_id,'eb_css', $_POST['data']);
        die();
    }
}