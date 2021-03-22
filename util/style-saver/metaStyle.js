// // Update Meta
wp.data.subscribe(() => {
    var isSavingPost = wp.data.select('core/editor').isSavingPost();
    var isAutosavingPost = wp.data.select('core/editor').isAutosavingPost();
  
    if (isSavingPost && !isAutosavingPost) {
        const post_id = wp.data.select("core/editor").getCurrentPostId();
        const all_blocks = wp.data.select("core/editor").getBlocks();

        let styles = {};
        all_blocks.forEach((item) => {
            if (item.attributes.ref && typeof(item.attributes.ref) === 'number' ) {
                const reusableBlock = wp.data.select('core/block-editor').__experimentalGetParsedReusableBlock(item.attributes.ref);
                reusableBlock.forEach((reusableitem) => {
                    if (reusableitem.attributes.blockMeta && reusableitem.attributes.blockRoot && reusableitem.attributes.blockRoot === "essential_block") {
                        styles = {...styles, ...{[reusableitem.attributes.blockId]: reusableitem.attributes.blockMeta}};
                    }
                });
            }
            else if(reusableitem.attributes.blockMeta && item.attributes.blockRoot && item.attributes.blockRoot === "essential_block") {
                styles = {...styles, ...{[item.attributes.blockId]: item.attributes.blockMeta}};
            }
        });
        jQuery.ajax({
            type: "POST",
            url: ajaxurl,
            data: {data: JSON.stringify(styles), id: post_id, action: "update_style_meta"},
            success: function(msg){
                 console.log("Style meta Successfully Added");
            }
        });
    }
});