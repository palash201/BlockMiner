export class Currency {
    name: string;
    iconName: string;

    constructor(name: string, iconName: string) {
        this.name = name;
        this.iconName = iconName;
    }
}

export const Stone = new Currency("Stone", "stone");
export const Rubies = new Currency("Rubies", "ruby");