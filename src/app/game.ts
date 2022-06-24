import { Rubies, Stone } from "./currency";
import { player } from "./player";

export const tick_delay = 500; // millis
export const autosave_delay = 15000 // millis

let previousTime: number = Date.now();
export function tick() {
    let currentTime = Date.now();
    let blocksPerSecond = player.getBlocksPerSecond();
    let stonePerSecond = player.getStonePerSecond();
    let rubiesPerSecond = player.getRubiesPerSecond();

    let timeElapsed = currentTime - previousTime;
    let timeMulti = timeElapsed / 1000;

    let blocks = blocksPerSecond * timeMulti

    player.blocksMined += blocks;
    player.addResource(Stone, stonePerSecond * timeMulti);
    player.addResource(Rubies, rubiesPerSecond * timeMulti);
    player.pickaxe.xp += blocks * player.pickaxe.getXpPerBlock();
    
    player.pickaxe.attemptLevelUp();
    
    previousTime = currentTime;
}