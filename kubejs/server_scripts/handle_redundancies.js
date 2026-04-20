const itemsToDisable = Array(
    "/quark:.*limestone.*/"
);

// in case players somehow have quark's limestone, these are used to offer a way to convert to create's limestone
const quarkLimestoneBlocks = "/quark:(polished_|chiseled_)?limestone(|_pillar|_bricks)$/"
const quarkLimestoneStairs = "/quark:.*limestone.*_stairs/"
const quarkLimestoneSlabs = "/quark:.*limestone.*_slab/"
const quarkLimestoneWalls = "/quark:.*limestone.*_wall/"

// hide the items from JEI's item panel
RecipeViewerEvents.removeEntriesCompletely("item", event => {
    itemsToDisable.forEach(itemToDisable => {
        event.remove(itemToDisable);
    })
})


ServerEvents.recipes(event => {
    // add recipes for turning quark limestone into create limestone
    // for slabs we have to use cut ones because no regular versions exist (and you can't turn them into blocks like you can with walls or stairs)
    event.shapeless(Item.of("create:limestone"),[quarkLimestoneBlocks]);
    event.shapeless(Item.of("create:limestone"),[quarkLimestoneStairs]);
    event.shapeless(Item.of("create:cut_limestone_slab"),[quarkLimestoneSlabs]);
    event.shapeless(Item.of("create:limestone"),[quarkLimestoneWalls]);
})
