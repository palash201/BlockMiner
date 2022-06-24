import { Buildings, Building } from "./building";
import { Currency, Rubies, Stone } from "./currency";
import { Enchantment } from "./enchantment";
import { Pickaxe } from "./pickaxe";
import { loadData } from "./save";

export class Player {
    blocksMined: number = 0;
    resources: Map<Currency, number> = new Map<Currency, number>();
    pickaxe: Pickaxe = new Pickaxe();
    buildings: Buildings = new Buildings();

    constructor() {
    }
    
    getPowerMultiplier(): number {
        let multi = 1;
        multi *= 1 + (this.buildings.getBuildingLevel(Building.Forge) * 0.5)
        return multi;
    }
    getStoneMultiplier(): number {
        let multi = 1;
        multi *= 1 + (this.buildings.getBuildingLevel(Building.Quarry) * 0.25)
        return multi;
    }
    getRubyMultiplier(): number {
        let multi = 1;
        return multi;
    }
    getXpMultiplier(): number {
        let multi = 1;
        multi *= 1 + (this.buildings.getBuildingLevel(Building.Quarry) * 0.25)
        return multi;
    }

    getBlocksPerSecond(): number {
        let amt = Math.sqrt(this.pickaxe.getPower());
        return amt;
    }
    getStonePerSecond(): number {
        let amt = this.getBlocksPerSecond();
        amt *= this.pickaxe.getStonePerBlock();
        return amt;
    }
    getRubiesPerSecond(): number {
        let amt = this.getBlocksPerSecond();
        amt *= this.pickaxe.getRubiesPerBlock();
        return amt;
    }

    unlockEnchantment(enchantment: Enchantment) {
        let enchantCost = this.pickaxe.getEnchantUnlockCost(enchantment);
        let enchantOnPick = this.pickaxe.enchantments.get(enchantment);
        if (!(enchantOnPick && enchantOnPick > 0) && (enchantCost && this.getResource(Rubies) > enchantCost)) {
            this.subtractResource(Rubies, enchantCost);
            this.pickaxe.addEnchantment(enchantment, 1);
        }
    }

    upgradeEnchantment(enchantment: Enchantment) {
        let levelCap = this.pickaxe.getEnchantLevelCap(enchantment);
        let currentLevel = this.pickaxe.enchantments.get(enchantment);
        if (currentLevel && currentLevel < levelCap) {
            let enchantCost = this.pickaxe.getEnchantUpgradeCost(enchantment);
            if ((enchantCost && this.getResource(Rubies) > enchantCost)) {
                this.subtractResource(Rubies, enchantCost);
                this.pickaxe.addEnchantment(enchantment, 1);
            }
        }
    }

    unlockBuilding(building: Building) {
        if (!this.buildings.isUnlocked(building) && this.buildings.canUnlock(building)) {
            let buildingCost = this.buildings.getBuildingUnlockCost(building);
            if (this.canAffordCost(buildingCost)) {
                this.subtractResources(buildingCost);
                this.buildings.addBuilding(building, 1);
            }
        }
    }

    upgradeBuilding(building: Building) {
        if (this.buildings.isUnlocked(building) && this.buildings.canUpgrade(building)) {
            let buildingCost = this.buildings.getBuildingUpgradeCost(building);
            if (this.canAffordCost(buildingCost)) {
                this.subtractResources(buildingCost);
                this.buildings.addBuilding(building, 1);
            }
        }
    }

    canAffordCost(costMap: Map<Currency, number>): boolean {
        let result = true;
        let resources = this.resources;
        costMap.forEach(function (cost: number, currency: Currency) {
            let amountPlayerHas = resources.get(currency);
            if (!amountPlayerHas || amountPlayerHas < cost) {
                result = false;
            }
        })
        return result;
    }

    subtractResources(costMap: Map<Currency, number>): void {
        let player = this;
        costMap.forEach(function (cost: number, currency: Currency) {
            player.subtractResource(currency, cost);
        })
    }

    subtractResource(currency: Currency, amount: number) {
        let amountPlayerHas = this.resources.get(currency);
        if (amountPlayerHas) {
            this.resources.set(currency, amountPlayerHas - amount);
        }
        else {
            console.log('Attempt to subtract from a resource the player does not have.')
        }
    }

    addResource(currency: Currency, amount: number) {
        let amountPlayerHas = this.resources.get(currency);
        if (amountPlayerHas) {
            this.resources.set(currency, amountPlayerHas + amount);
        }
        else {
            this.resources.set(currency, amount);
        }
    }

    setResource(currency: Currency, amount: number) {
        this.resources.set(currency, amount);
    }

    getResource(currency: Currency) {
        let amountPlayerHas = this.resources.get(currency);
        if (amountPlayerHas) {
            return amountPlayerHas;
        }
        return NaN;
    }

    getResourceByName(currencyName: String) {
        let currency;
        if (currencyName == "Stone") {
            currency = Stone;
        }
        else if (currencyName == "Rubies") {
            currency = Rubies;
        }
        if (currency) {
            let amountPlayerHas = this.resources.get(currency);
            if (amountPlayerHas) {
                return amountPlayerHas;
            }
        }
        return NaN;
    }

}

export const player = new Player();
loadData();