export enum Enchantment {
    Efficiency = "Efficiency",
    Fortune = "Fortune",
    Lucky = "Lucky",
}

export const enchantList = [
    Enchantment.Efficiency,
    Enchantment.Fortune,
    Enchantment.Lucky
]

export const levelCaps: Map<Enchantment, number> = new Map<Enchantment, number>();
levelCaps.set(Enchantment.Efficiency, 10);
levelCaps.set(Enchantment.Fortune, 10);
levelCaps.set(Enchantment.Lucky, 4);