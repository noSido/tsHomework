import {AbstractPurchase} from "./abstract-purchase";
import {Product} from "./product";

export class DeliveryPurchase extends AbstractPurchase{
    constructor(product: Product, quantity: number, private logisticExpenses:number) {
        super(product,quantity);
    }

    override getCost(): number {
        return this.quantity*this.logisticExpenses + this.quantity*this.product.cost
    }
}
