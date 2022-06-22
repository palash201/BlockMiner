import { Enchantment } from "./enchantment";

export class Pickaxe {
    level: number = 1;
    xp: number = 0;
    basePower: number = 1;
    enchantments: Map<Enchantment, number> = new Map<Enchantment, number>();

    constructor() {
        this.addEnchantment(Enchantment.Efficiency, 0);
        this.addEnchantment(Enchantment.Fortune, 0);
        this.addEnchantment(Enchantment.Lucky, 0);
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
        let power = this.basePower * (1 + (0.1 * (this.level-1)));
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
        if (Enchantment[enchantment] == "Efficiency") {
            return 5;
        }
        else if (Enchantment[enchantment] == "Fortune") {
            return 25;
        }
        else if (Enchantment[enchantment] == "Lucky") {
            return 125;
        }
        return null;
    }
}