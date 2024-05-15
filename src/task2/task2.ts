import {DiscountedPurchase} from "./discounted-purchase";
import {QuantityDiscountedPurchase} from "./quantity-discounted-purchase";
import {DeliveryPurchase} from "./delivery-purchase";
import {AbstractPurchase} from "./abstract-purchase";
import {Product} from "./product";

const purchases: AbstractPurchase[] = [
    new DiscountedPurchase(new Product('Хлеб', 100), 10, 99),
    new DiscountedPurchase(new Product('Вода', 99), 9, 9),
    new QuantityDiscountedPurchase(new Product('Сахар', 87), 10, 15, 11),
    new QuantityDiscountedPurchase(new Product('Соль', 88), 10, 20, 9),
    new DeliveryPurchase(new Product('Пельмени', 85), 10, 30),
    new DeliveryPurchase(new Product('Мармелад', 86), 10, 20)
];

console.log(purchases)

// purchases.sort(AbstractPurchase.compare).map(purchase => purchase.log())

console.log(purchases.sort((a, b) => {
    return a.compare(b)
}).map(purchase => {
    purchase.log();
    return purchase.getCost();
}))

