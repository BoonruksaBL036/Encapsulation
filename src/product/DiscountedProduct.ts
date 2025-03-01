import { log } from "console"
import { Product } from "./Product"

export class DiscountedProduct {
    private discount : number

    constructor(discount:number){
        this.discount = discount
    }

    public DiscountedProduct(product:Product):void{
        const caldiscount = product.getPrice() * (100 - this.discount)/100
        console.log(`ราคาเต็ม ${product.getPrice()}บาท`)
        console.log(`ส่วนลด ${this.discount}%`)
        console.log(`ราคาหลังจากหักส่วนลดแล้ว ${caldiscount}`)
    }



}
