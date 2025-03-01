import { DiscountedProduct } from "./DiscountedProduct";
import { Product } from "./Product";

const product1 = new Product("B001","coconut milk",20)
const discount = new DiscountedProduct(10)

discount.DiscountedProduct(product1)