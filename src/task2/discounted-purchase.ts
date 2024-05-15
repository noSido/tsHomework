import {AbstractPurchase} from "./abstract-purchase";
import {Product} from "./product";

export class DiscountedPurchase extends AbstractPurchase {
    constructor(product: Product, quantity: number, private discount: number) {
        super(product, quantity);
    }

    override getCost(): number {
       return this.product.cost - (this.product.cost / 100 * this.discount)
    }
}
