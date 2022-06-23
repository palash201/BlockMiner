import { Currency, Rubies, Stone } from "./currency";

export class Buildings {

    buildings: Map<Building, number> = new Map<Building, number>();

    constructor() {

    }

    getBuildingLevel(building: Building): number {
        let level = this.buildings.get(building);
        if (level) {
            return level;
        }
        return 0;
    }

    getBuildingLevelCap(building: Building): number {
        let cap = buildingLevelCaps.get(building);
        if (cap) {
            return cap;
        }
        return 0;
    }

    getBuildingUnlockCost(building: Building): Map<Currency, number> {
        let cost = new Map<Currency, number>();
        if (building == Building.Quarry) {
            cost.set(Stone, 25);
        }
        else if (building == Building.Forge) {
            cost.set(Stone, 500);
        }
        else if (building == Building.Shrine) {
            cost.set(Stone, 10000);
            cost.set(Rubies, 100);
        }
        return cost;
    }

    getBuildingUpgradeCost(building: Building): Map<Currency, number> {
        let cost = new Map<Currency, number>();
        if (building == Building.Quarry) {
            cost.set(Stone, 25 * (this.getBuildingLevel(building) + 1));
        }
        else if (building == Building.Forge) {
            cost.set(Stone, 500 * (this.getBuildingLevel(building) + 1));
        }
        else if (building == Building.Shrine) {
            cost.set(Stone, Infinity);
            cost.set(Rubies, Infinity);
        }
        return cost;
    }

    isUnlocked(building: Building): boolean {
        return this.buildings.has(building);
    }

    addBuilding(building: Building, level: number): void {
        let currentLevel = this.getBuildingLevel(building);
        this.buildings.set(building, currentLevel + level);
    }

    canUnlock(building: Building): boolean { // If building unlock requirments are added
        return true;
    }

    canUpgrade(building: Building): boolean {
        return this.getBuildingLevel(building) < this.getBuildingLevelCap(building);
    }
}

export enum Building {
    Quarry = "Quarry",
    Forge = "Forge",
    Shrine = "Shrine",
}

export const buildingLevelCaps: Map<Building, number> = new Map<Building, number>();
buildingLevelCaps.set(Building.Quarry, 100);
buildingLevelCaps.set(Building.Forge, 10);
buildingLevelCaps.set(Building.Shrine, 1);