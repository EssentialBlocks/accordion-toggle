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
        // `register_block_type()` only accepts a block.json directory path from
        // WP 5.8 onwards. Use version_compare(), not a float cast: (float) on a
        // version string such as "5.10" or "7.10" evaluates to 5.1 / 7.1 and
        // silently picks the wrong branch.
        if (version_compare(get_bloginfo('version'), '5.8', '<')) {
            return 'accordion-toggle/' . $folder_name;
        } else {
            return ACCORDION_BLOCK_ADMIN_PATH . '/blocks/' . $folder_name;
        }
    }

    /**
     * Read a generated `*.asset.php` file and always return a usable array.
     *
     * `include_once` returns bool(true) when the file has already been included,
     * which makes `$asset['dependencies']` an array-offset-on-bool warning on
     * PHP 7.4+ and a null dependency list on every PHP version. Using `include`
     * plus a shape check keeps the return value an array in all cases, and also
     * survives a missing `dist/` build instead of fataling.
     *
     * @param string $relative_path Path relative to the plugin root, leading slash included.
     * @return array Always has `dependencies` (array) and `version` (string) keys.
     */
    public static function get_asset_file($relative_path)
    {
        $defaults = array(
            'dependencies' => array(),
            'version'      => ACCORDION_BLOCK_VERSION,
        );

        $full_path = ACCORDION_BLOCK_ADMIN_PATH . $relative_path;

        if (!file_exists($full_path)) {
            return $defaults;
        }

        $asset = include $full_path;

        if (!is_array($asset)) {
            return $defaults;
        }

        $asset = array_merge($defaults, $asset);

        if (!is_array($asset['dependencies'])) {
            $asset['dependencies'] = array();
        }

        return $asset;
    }
}
Accordion_Helper::register();
