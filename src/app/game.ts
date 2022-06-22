import { player } from "./player";

export const tick_delay = 500; // millis

let previousTime: number = Date.now();
export function tick() {
    let currentTime = Date.now();
    let blocksPerSecond = player.getBlocksPerSecond();
    let stonePerSecond = player.getStonePerSecond();
    let rubyChance = player.getRubyChance();

    let timeElapsed = currentTime - previousTime;
    let timeMulti = timeElapsed / 1000;

    let blocks = blocksPerSecond * timeMulti
    player.blocksMined += blocks;
    player.stone += stonePerSecond * timeMulti;
    if (rubyChance > Math.random()) {
        player.rubies += blocks;
    }
    player.pickaxe.xp += blocks;
    player.pickaxe.attemptLevelUp();
    
    previousTime = currentTime;
}