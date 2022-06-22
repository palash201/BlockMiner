import { Enchantment } from "./enchantment";
import { Pickaxe } from "./pickaxe";

class Player {
    blocksMined: number = 0;
    stone: number = 0;
    rubies: number = 0;
    pickaxe: Pickaxe = new Pickaxe();

    getBlocksPerSecond():number {
        return Math.sqrt(this.pickaxe.getPower());
    }
    getStonePerSecond():number {
        return this.getBlocksPerSecond();
    }
    getRubyChance():number {
        return 0.01;
    }

    unlockEnchantment(enchantment: Enchantment) {
        let enchantCost = this.pickaxe.getEnchantUnlockCost(enchantment);
        
    }
}

export const player = new Player();