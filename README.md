# createvillage-kubejs
This repository contains KubeJS scripts and datapacks for use in [CreateVillage Repaved](https://www.curseforge.com/minecraft/modpacks/createvillage-repaved) - a Minecraft modpack. It's not officially associated with the pack, and at the time of writing nothing in here has made it into the pack itself.

I created this because I kept running into issues with sharing scripts on the pack's Discord server. There were plans to reset the server and tweak the modpack (then known as CreateVillage) to fix some balance issues, and I wanted to show that it was possible to replace the block generator mod it had with something that was better balanced, implemented generation methods for blocks that had fluid-based methods but weren't supported (e.g. concrete) and didn't require adding any new mods (other than KubeJS and its addons).

When the server was reset, a separate modpack was created for it (CreateVillage Repaved). At some point, the generator script (`kubejs/server_scripts/mixer_cobble_gen.js`) was added to the server.

## Requirements & Usage
Unless stated otherwise, all scripts require KubeJS and KubeJS Create, plus their dependencies.

If you want to test the scripts for yourself, install CreateVillage Repaved as normal and place the contents of `server_scripts` in `minecraft/kubejs/server_scripts` within the pack. If you don't have a `kubejs` or `server_scripts` folder, add them manually or run the game until it reaches the main menu and quit.