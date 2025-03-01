"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = void 0;
class DiscountedProduct {
    constructor(discount) {
        this.discount = discount;
    }
    DiscountedProduct(product) {
        const caldiscount = product.getPrice() * (100 - this.discount) / 100;
        console.log(`ราคาเต็ม ${product.getPrice()}บาท`);
        console.log(`ส่วนลด ${this.discount}%`);
        console.log(`ราคาหลังจากหักส่วนลดแล้ว ${caldiscount}`);
    }
}
exports.DiscountedProduct = DiscountedProduct;
