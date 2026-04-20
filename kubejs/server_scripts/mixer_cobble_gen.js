ServerEvents.recipes(event => {
    // TODO: can the input fluid and output block declaring be more compact?
    const dyeFluids = [
        "create_dragons_plus:white_dye", "create_dragons_plus:orange_dye", "create_dragons_plus:magenta_dye",
        "create_dragons_plus:light_blue_dye", "create_dragons_plus:yellow_dye", "create_dragons_plus:lime_dye",
        "create_dragons_plus:pink_dye", "create_dragons_plus:gray_dye", "create_dragons_plus:light_gray_dye",
        "create_dragons_plus:cyan_dye", "create_dragons_plus:purple_dye", "create_dragons_plus:blue_dye",
        "create_dragons_plus:brown_dye", "create_dragons_plus:green_dye", "create_dragons_plus:red_dye",
        "create_dragons_plus:black_dye",
    ]
    const concreteBlocks = [
        "white_concrete", "orange_concrete", "magenta_concrete",
        "light_blue_concrete", "yellow_concrete", "lime_concrete",
        "pink_concrete", "gray_concrete", "light_gray_concrete",
        "cyan_concrete", "purple_concrete", "blue_concrete",
        "brown_concrete", "green_concrete", "red_concrete",
        "black_concrete"
    ]

    const basicCobbleGenBlocks = ["minecraft:cobblestone", "2x minecraft:stone", "create:limestone"]

    const cobbleGenGaloreBlocks = ["create:crimsite", "create:asurine", "create:veridium", "create:ochrum"]
    // these blocks (except ochrum) could be generated via cobblegen galore
    // tuff can, but another mod in CreateVillage already has a mixing recipe (andesite + cobble + lava)
    // obsidian, diorite, granite and cobbled deepslate already have recipes (mixing or not mixing) that should be okay
    
    // add mixing recipes for making concrete with liquid dye and lava (which was missing from cobblegen galore)
    for (let index = 0; index < dyeFluids.length; index++) {
        event.recipes.create.mixing(
            [concreteBlocks[index], Fluid.of("lava", 100), Fluid.of(dyeFluids[index], 100)],
            [Fluid.of("lava", 100), Fluid.of(dyeFluids[index], 100)]
        );
    }

    // add mixing recipe for (cobble)stone
    for (let index = 0; index < basicCobbleGenBlocks.length; index++) {
        event.recipes.create.mixing(
            [basicCobbleGenBlocks[index],Fluid.of("lava", 100), Fluid.of("water", 100)],
            [Fluid.of("lava", 100), Fluid.of("water", 100)]
        );
    }

    // scoria can be made with lava and liquid chocolate; might as well add that too
    event.recipes.create.mixing(
        ["create:scoria", Fluid.of("lava", 100), Fluid.of("create:chocolate", 100)],
        [Fluid.of("lava", 100), Fluid.of("create:chocolate", 100)]
    );

    // add mixing recipe for basalt (based on cobblegen galore's)
    event.recipes.create.mixing(
        ["basalt", Fluid.of("lava", 100), "blue_ice"],
        [Fluid.of("lava", 100), "blue_ice"]
    );

    // readd some other cobblegen galore recipes as mixing recipes (and ochrum)
    for (let index = 0; index < cobbleGenGaloreBlocks.length; index++) {
        var blockToUse = cobbleGenGaloreBlocks[index]
        event.recipes.create.mixing(
            [blockToUse, CreateItem.of("2x " + blockToUse, 0.33),Fluid.of("lava", 100), Fluid.of("water", 100)],
            [blockToUse, Fluid.of("lava", 100), Fluid.of("water", 100)]
        ).superheated();
    }
    
})