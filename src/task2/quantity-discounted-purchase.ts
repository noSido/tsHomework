import {AbstractPurchase} from "./abstract-purchase";
import {Product} from "./product";

export class QuantityDiscountedPurchase extends AbstractPurchase {
    constructor(product: Product, quantity: number, private discount: number, private quantityToDiscount: number) {
        super(product, quantity);
    }

    override getCost(): number {
        if (this.quantity >= this.quantityToDiscount) {
            return (this.product.cost - (this.product.cost / 100 * this.discount)) * this.quantity
        } else {
            return this.product.cost * this.quantity
        }
    }


}
