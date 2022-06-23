import { Enchantment, levelCaps } from "./enchantment";
import { Player } from "./player";

export class Pickaxe {
    player: Player | null = null;
    level: number = 1;
    xp: number = 0;
    basePower: number = 5;
    baseStonePerBlock: number = 1;
    baseRubiesPerBlock: number = 0.05;
    baseXpPerBlock: number = 1;
    enchantments: Map<Enchantment, number> = new Map<Enchantment, number>();

    constructor() {
    }

    setPlayer(player: Player) {
        this.player = player;
    }
    getStonePerBlock():number {
        let stonePerBlock = this.baseStonePerBlock;
        stonePerBlock *= 1 + (this.getEnchantLevel(Enchantment.Fortune) * 0.5);
        if (this.player) {
            stonePerBlock *= this.player.getStoneMultiplier();
        }
        return stonePerBlock;
    }
    getRubiesPerBlock():number {
        let rubiesPerBlock = this.baseRubiesPerBlock;
        rubiesPerBlock *= 1 + (this.getEnchantLevel(Enchantment.Fortune) * 0.5);
        rubiesPerBlock *= 1 + (this.getEnchantLevel(Enchantment.Lucky));
        if (this.player) {
            rubiesPerBlock *= this.player.getRubyMultiplier();
        }
        return rubiesPerBlock;
    }
    getXpPerBlock():number {
        let xpPerBlock = this.baseXpPerBlock;
        if (this.player) {
            xpPerBlock *= this.player.getXpMultiplier();
        }
        return xpPerBlock;
    }
    xpRequiredToLevel(): number {
        return 100 + (25 *  Math.pow(this.level-1, 2));
    }
    attemptLevelUp(): void {
        let xpReq = this.xpRequiredToLevel();
        if (this.xp >= xpReq) {
            this.xp -= xpReq;
            this.level++;
        }
    }
    getPower(): number {
        let effLevel = this.enchantments.get(Enchantment.Efficiency);
        let power = this.basePower;
        if (effLevel) {
            power += Math.pow(effLevel+1, 2); // Efficiency bonus
        }
        if (this.player) {
            power *= this.player.getPowerMultiplier(); // Player's multiplier bonus
        }
        power *= (this.level+1)/2; // level bonus
        return power;
    }
    addEnchantment(enchantment: Enchantment, level: number): void {
        let enchants = this.enchantments;
        let currentLevel = enchants.get(enchantment);
        if (currentLevel) {
            enchants.set(enchantment, currentLevel + level)
        }
        else {
            enchants.set(enchantment, level)
        }
    }
    getEnchantUnlockCost(enchantment: Enchantment) {
        if (enchantment == Enchantment.Efficiency) {
            return 5;
        }
        else if (enchantment == Enchantment.Fortune) {
            return 50;
        }
        else if (enchantment == Enchantment.Lucky) {
            return 250;
        }
        return Infinity;
    }
    getEnchantUpgradeCost(enchantment: Enchantment) {
        let levelCap = this.getEnchantLevelCap(enchantment);
        let currentLevel = this.enchantments.get(enchantment);
        if (currentLevel && currentLevel < levelCap) {
            if (enchantment == Enchantment.Efficiency) {
                return 5 + 5 * Math.pow(currentLevel, 2);
            }
            else if (enchantment == Enchantment.Fortune) {
                return 50 + 50 * Math.pow(currentLevel, 3);
            }
            else if (enchantment == Enchantment.Lucky) {
                return 250 + 250 * Math.pow(currentLevel, 3);
            }
        }
        return Infinity;
    }
    getEnchantLevelCap(enchantment: Enchantment):number {
        let levelCap = levelCaps.get(enchantment);
        if (levelCap) {
            return levelCap;
        }
        return Infinity;
    }
    getEnchantLevel(enchantment: Enchantment):number {
        let level = this.enchantments.get(enchantment);
        if (!level) {
            return 0;
        }
        return level;
    }
}