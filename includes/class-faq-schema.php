<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class ATFaqSchema
{
    /**
     * Google schema to add to head
     *
     * @var null
     */
    public static $faq_schema = null;

    /**
     * Question / answer pairs collected for the FAQPage graph.
     *
     * @var array
     */
    private static $faq_entities = array();

    /**
     * Instance of this class
     *
     * @var null
     */
    private static $instance = null;

    /**
     * Init Class Func
     */
    public static function init()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * Instance Control
     */
    public static function get_instance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor Class
     */
    public function __construct()
    {
        add_action('wp_head', array($this, 'eb_faq_schema'), 91);
    }

    /**
     * Print FAQ Schema in wp_head
     */
    public function eb_faq_schema()
    {
        $this->render_accordion_item_faq_schema();

        if (empty(self::$faq_schema) || empty(self::$faq_entities)) {
            return;
        }

        $graph = array(
            '@context'   => 'https://schema.org',
            '@type'      => 'FAQPage',
            'mainEntity' => array_values(self::$faq_entities),
        );

        /**
         * The graph used to be concatenated by hand: a quote, backslash or line
         * break in an answer produced invalid JSON, and the answer markup was
         * only passed through strip_tags(), which keeps an allowed tag (<a>,
         * <p>...) with all of its attributes intact. wp_json_encode() with
         * JSON_HEX_TAG writes every < and > as \u003C / \u003E, so nothing in an
         * answer can close the <script> element, and the output is always valid
         * JSON.
         */
        $json = wp_json_encode($graph, JSON_HEX_TAG | JSON_HEX_AMP | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        if (false === $json) {
            return;
        }

        printf(
            '<script type="application/ld+json" class="%s">%s</script>' . "\n",
            esc_attr(self::$faq_schema),
            $json // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_json_encode() with JSON_HEX_TAG.
        );
    }

    /**
     * Load faq schema
     */
    public function render_accordion_item_faq_schema()
    {

        if (function_exists('has_blocks') && has_blocks(get_the_ID())) {

            global $post;

            if (!is_object($post)) {
                return;
            }
            if (is_archive() || is_home()) {
                return;
            }

            $blocks = $this->eb_parse_blocks($post->post_content);

            if (!is_array($blocks) || empty($blocks)) {
                return;
            }
            foreach ($blocks as $block) {

                if (!is_object($block) && is_array($block) && isset($block['blockName'])) {

                    if ('accordion-toggle/accordion-toggle' === $block['blockName']) {

                        if (isset($block['attrs']) && is_array($block['attrs'])) {
                            $attributes = $block['attrs'];
                            if (!empty($attributes['blockId'])) {

                                $unique_id = $attributes['blockId'];
                                if (isset($attributes['faqSchema']) && $attributes['faqSchema']) {
                                    if (is_null(self::$faq_schema)) {
                                        self::$faq_schema = 'eb-faq-schema-graph eb-faq-schema-graph--eb-faq' . sanitize_html_class($unique_id);
                                    }
                                }
                            }
                        }
                    }
                    // check for accordion-item blocks
                    if ('accordion-toggle/accordion-item' === $block['blockName']) {
                        if (isset($block['attrs']) && is_array($block['attrs'])) {
                            if (isset($block['attrs']['faqSchema']) && $block['attrs']['faqSchema']) {
                                $this->render_accordion_item_scheme_head($block);
                            }
                        }
                    }
                    if (isset($block['innerBlocks']) && !empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
                        $this->recursive_inner_blocks($block['innerBlocks']);
                    }
                }
            }
        }
    }

    /**
     * Recursively check inner blocks
     * 
     * @param array $inner_blocks inner blocks array
     */
    public function recursive_inner_blocks($inner_blocks)
    {
        foreach ($inner_blocks as $inner_block) {
            if (!is_object($inner_block) && is_array($inner_block) && isset($inner_block['blockName'])) {
                if ('accordion-toggle/accordion-toggle' === $inner_block['blockName']) {
                    if (isset($inner_block['attrs']) && is_array($inner_block['attrs'])) {
                        $attributes = $inner_block['attrs'];
                        if (!empty($attributes['blockId'])) {
                            $unique_id = $attributes['blockId'];
                            if (isset($attributes['faqSchema']) && $attributes['faqSchema']) {
                                if (is_null(self::$faq_schema)) {
                                    self::$faq_schema = 'eb-faq-schema-graph eb-faq-schema-graph--eb-faq' . sanitize_html_class($unique_id);
                                }
                            }
                        }
                    }
                }
                if ('accordion-toggle/accordion-item' === $inner_block['blockName']) {
                    if (isset($inner_block['attrs']) && is_array($inner_block['attrs'])) {
                        if (isset($inner_block['attrs']['faqSchema']) && $inner_block['attrs']['faqSchema']) {
                            $this->render_accordion_item_scheme_head($inner_block);
                        }
                    }
                }
                if (isset($inner_block['innerBlocks']) && !empty($inner_block['innerBlocks']) && is_array($inner_block['innerBlocks'])) {
                    $this->recursive_inner_blocks($inner_block['innerBlocks']);
                }
            }
        }
    }

    /**
     * Parse blocks of a page/post
     * 
     * @param string $content content of a page/post
     */
    public function eb_parse_blocks($content)
    {
        $parser_class = apply_filters('block_parser_class', 'WP_Block_Parser');
        if (class_exists($parser_class)) {
            $parser = new $parser_class();
            return $parser->parse($content);
        } elseif (function_exists('gutenberg_parse_blocks')) {
            return gutenberg_parse_blocks($content);
        } else {
            return false;
        }
    }

    /**
     * build FAQ schema 
     * 
     * @param array @block array of blocks
     */
    public function render_accordion_item_scheme_head($block)
    {
        if (!is_null(self::$faq_schema)) {
            if (isset($block['innerBlocks']) && is_array($block['innerBlocks']) && !empty($block['innerBlocks'])) {

                $answer = '';
                foreach ($block['innerBlocks'] as $inner_block) {
                    if (!empty($inner_block['innerHTML'])) {
                        $inner_html = trim(strip_tags($inner_block['innerHTML'], '<a><strong><br><h1><h2><h3><h4><h5><h6><ul><li><ol><p>'));
                        if (!empty($inner_html)) {
                            $answer .= $inner_html;
                        }
                    }
                    if (isset($inner_block['innerBlocks']) && is_array($inner_block['innerBlocks']) && !empty($inner_block['innerBlocks'])) {
                        foreach ($inner_block['innerBlocks'] as $again_inner_block) {
                            if (!empty($again_inner_block['innerHTML'])) {
                                $inner_html = trim(strip_tags($again_inner_block['innerHTML'], '<a><strong><br><h1><h2><h3><h4><h5><h6><ul><li><ol><p>'));
                                if (!empty($inner_html)) {
                                    $answer .= $inner_html;
                                }
                            }
                            if (isset($again_inner_block['innerBlocks']) && is_array($again_inner_block['innerBlocks']) && !empty($again_inner_block['innerBlocks'])) {
                                foreach ($again_inner_block['innerBlocks'] as $again_again_inner_block) {
                                    if (!empty($again_again_inner_block['innerHTML'])) {
                                        $inner_html = trim(strip_tags($again_again_inner_block['innerHTML'], '<a><strong><br><h1><h2><h3><h4><h5><h6><ul><li><ol><p>'));
                                        if (!empty($inner_html)) {
                                            $answer .= $inner_html;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                // Cast before strip_tags(): passing null to a non-nullable
                // internal string parameter is deprecated as of PHP 8.1, and
                // the key is missing entirely on some parsed block shapes.
                $raw_inner_html = isset($block['innerHTML']) ? (string) $block['innerHTML'] : '';
                // Plain text for the question: tags removed, entities decoded so the
                // structured data carries the text a reader sees ("Q&A", not "Q&amp;A").
                $question = trim(html_entity_decode(wp_strip_all_tags($raw_inner_html), ENT_QUOTES | ENT_HTML5, 'UTF-8'));

                if ('' !== $question && '' !== trim($answer)) {
                    self::$faq_entities[] = array(
                        '@type'          => 'Question',
                        'name'           => $question,
                        'acceptedAnswer' => array(
                            '@type' => 'Answer',
                            'text'  => $answer,
                        ),
                    );
                }
            }
        }
    }
}

ATFaqSchema::init();
