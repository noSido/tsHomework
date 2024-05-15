import {Product} from "./product";

export abstract class AbstractPurchase {
    get quantity(): number {
        return this._quantity
    }

    set quantity(value: number) {
        if (value < 0) {
            throw new Error('Price cant be negative')
        } else {
            this._quantity = value;
        }
    }

    constructor(protected readonly product: Product, protected _quantity: number) {
    }

    abstract getCost(): number;

    log(): void {
        this.product.log()
    }

    compare(other: AbstractPurchase): number {
        if (this.getCost() < other.getCost()) {
            return -1;
        } else if (this.getCost() > other.getCost()) {
            return 1
        } else {
            return 0
        }
    }
}