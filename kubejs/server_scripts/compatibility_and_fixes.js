ServerEvents.tags('item', event => {
    // cocktails delight's seeds are missing some tags that they should have, which prevents some recipes and feature from working as expected
    const seedsToFix = [
        "cocktailsdelight:white_grape_seeds",
        "cocktailsdelight:red_grape_seeds",
        "cocktailsdelight:hops_seeds"
    ];
    const tagsForSeedsToFix = [
        "c:seeds", "c:animal_foods",
        "minecraft:maintains_farmland",
        "minecraft:chicken_food",
        "minecraft:parrot_food",
        "minecraft:bee_growables",
        "minecraft:sword_efficient",
        "quark:hoe_harvestable"
    ];

    seedsToFix.forEach(seedToFix => {
        tagsForSeedsToFix.forEach(tagToAdd => {
            event.add(tagToAdd, seedToFix);
        });
    });
})

ServerEvents.recipes(event => {
    // replace the output of any recipes that output create's dough wtih farmer's delight's wheat dough
    // this won't touch create diesel generators' dough fermenting recipe, but we can use /data to replace that
    event.replaceOutput({output: "create:dough"}, "create:dough", "farmersdelight:wheat_dough");

    // modify create recipes that use create dough so they can still be used
    const doughInputRecipeOutputs = ["minecraft:cake", "createaddition:cake_base"];
    
    doughInputRecipeOutputs.forEach(element => {
        event.replaceInput({output: element}, "create:dough", "farmersdelight:wheat_dough");
    });

    // TODO: handle seed oil and biofuel (from crafts & additions; redundant because of create diesel generators)

    
})

