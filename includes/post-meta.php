<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Accordion_Post_Meta
{
    public function __construct()
    {
        // `init` is an action, not a filter. Both go through the same registry
        // so this is behaviour-identical, but add_filter() on an action trips
        // static analysis and WPCS.
        add_action('init', array($this, 'register_meta'));
    }

    /**
     * Register meta
     */
    public function register_meta()
    {
        register_meta(
            'post',
            '_eb_attr',
            array(
                // `type` is implicitly 'string' when omitted; declaring it
                // explicitly is required for a stable REST schema on WP 5.5+.
                'type' => 'string',
                'show_in_rest' => true,
                'single' => true,
                'auth_callback' => [$this, 'auth_callback'],
            )
        );
    }

    /**
     * Determine if the current user can edit posts
     *
     * @return bool True when can edit posts, else false.
     */
    public function auth_callback()
    {
        return current_user_can('edit_posts');
    }
}

new Accordion_Post_Meta();
