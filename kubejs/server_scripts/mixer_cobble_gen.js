ServerEvents.recipes(event => {
    const basicCobbleGenBlocks = ["2x minecraft:cobblestone", "2x minecraft:stone", "create:limestone"]

    const cobbleGenGaloreBlocks = ["create:crimsite", "create:asurine", "create:veridium", "create:ochrum"]
    // these blocks (except ochrum) could be generated via cobblegen galore
    // tuff can, but another mod in CreateVillage already has a mixing recipe (andesite + cobble + lava)
    // obsidian, diorite, granite and cobbled deepslate already have recipes (mixing or not mixing) that should be okay
    
    // add mixing recipes for making concrete with liquid dye and lava (which was missing from cobblegen galore)
    Color.DYE.forEach(colorToUse => {
        event.recipes.create.mixing(
            ["2x minecraft:" + colorToUse + "_concrete", Fluid.of("lava", 100), Fluid.of("create_dragons_plus:" + colorToUse + "_dye", 100)],
            [Fluid.of("lava", 100), Fluid.of("create_dragons_plus:" + colorToUse + "_dye", 100)]
        );
    });

    // add mixing recipe for (cobble)stone
    basicCobbleGenBlocks.forEach(blockToUse => {
        event.recipes.create.mixing(
            [blockToUse,Fluid.of("lava", 100), Fluid.of("water", 100)],
            [Fluid.of("lava", 100), Fluid.of("water", 100)]
        );
    });

    // scoria can be made with lava and liquid chocolate; might as well add that too
    event.recipes.create.mixing(
        ["2x create:scoria", Fluid.of("lava", 100), Fluid.of("create:chocolate", 100)],
        [Fluid.of("lava", 100), Fluid.of("create:chocolate", 100)]
    );

    // add mixing recipe for basalt (based on cobblegen galore's)
    event.recipes.create.mixing(
        ["2x minecraft:basalt", Fluid.of("lava", 100), "blue_ice"],
        [Fluid.of("lava", 100), "blue_ice"]
    );

    // readd some other cobblegen galore recipes as mixing recipes (and ochrum)
    cobbleGenGaloreBlocks.forEach(blockToUse => {
        event.recipes.create.mixing(
            [blockToUse, CreateItem.of("2x " + blockToUse, 0.33),Fluid.of("lava", 100), Fluid.of("water", 100)],
            [blockToUse, Fluid.of("lava", 100), Fluid.of("water", 100)]
        ).superheated();
    });
    
})