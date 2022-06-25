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
            cost.set(Stone, 10);
        }
        else if (building == Building.Forge) {
            cost.set(Stone, 100);
        }
        else if (building == Building.Lab) {
            cost.set(Stone, 1000);
            cost.set(Rubies, 25);
        }
        return cost;
    }

    getBuildingUpgradeCost(building: Building): Map<Currency, number> {
        let cost = new Map<Currency, number>();
        if (building == Building.Quarry) {
            cost.set(Stone, Math.floor(1 + this.getBuildingLevel(building)/10) * 5 * (this.getBuildingLevel(building) + 1) * (this.getBuildingLevel(building) + 2));
        }
        else if (building == Building.Forge) {
            cost.set(Stone, Math.floor(1 + this.getBuildingLevel(building)/10) * 50 * (this.getBuildingLevel(building) + 1) * (this.getBuildingLevel(building) + 2));
        }
        else if (building == Building.Lab) {
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
    Lab = "Lab",
}

export const buildingLevelCaps: Map<Building, number> = new Map<Building, number>();
buildingLevelCaps.set(Building.Quarry, Infinity);
buildingLevelCaps.set(Building.Forge, Infinity);
buildingLevelCaps.set(Building.Lab, 1);