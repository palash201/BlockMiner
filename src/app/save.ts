import { Building } from "./building";
import { Rubies, Stone } from "./currency";
import { Enchantment } from "./enchantment";
import { player } from "./player";

export function saveData() {
    let data = {
        blocksMined: player.blocksMined,
        level: player.pickaxe.level,
        xp: player.pickaxe.xp,
        stone: player.resources.get(Stone),
        rubies: player.resources.get(Rubies),
        enchantments: JSON.stringify(Array.from(player.pickaxe.enchantments)),
        buildings: JSON.stringify(Array.from(player.buildings.buildings))
    };
    localStorage.setItem('data', JSON.stringify(data));
};

export function loadData() {
    let storedData = localStorage.getItem('data');
    if (storedData) {
        let data = JSON.parse(storedData);

        player.blocksMined = data.blocksMined;
        player.pickaxe.level = data.level;
        player.pickaxe.xp = data.xp;
        player.resources.set(Stone, data.stone);
        player.resources.set(Rubies, data.rubies);
        player.pickaxe.enchantments = new Map(JSON.parse(data.enchantments));
        player.buildings.buildings = new Map(JSON.parse(data.buildings));
    }
    else {
        player.resources.set(Stone, 0);
        player.resources.set(Rubies, 0);
    }
};

export function wipeData() {
    player.blocksMined = 0;
    player.pickaxe.level = 1
    player.pickaxe.xp = 0;
    player.resources.set(Stone, 0);
    player.resources.set(Rubies, 0);
    player.pickaxe.enchantments = new Map<Enchantment, number>();
    player.buildings.buildings = new Map<Building, number>();
}