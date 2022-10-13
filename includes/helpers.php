<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}
class Accordion_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public static function get_block_register_path($folder_name)
    {
        if ((float) get_bloginfo('version') < 5.8) {
            return 'accordion-toggle/' . $folder_name;
        } else {
            return ACCORDION_BLOCK_ADMIN_PATH . '/blocks/' . $folder_name;
        }
    }
}
Accordion_Helper::register();
