export class Product {
    get name(): string {
        return this._name
    }

    set name(value: string) {
        if (value.length <= 0) {
            throw new Error('Type some name')
        } else {
            this._name = value;
        }
    }

    get cost(): number {
        return this._cost
    }

    set cost(value: number) {
        if (value < 0) {
            throw new Error('Price cant be negative')
        } else {
            this._cost = value;
        }
    }

    constructor(private _name: string, private _cost: number) {
    }

    public log(): void {
        console.log(`${this.name}; ${this.cost}`);
    }
}



