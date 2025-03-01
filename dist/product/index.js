"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiscountedProduct_1 = require("./DiscountedProduct");
const Product_1 = require("./Product");
const product1 = new Product_1.Product("B001", "coconut milk", 20);
const discount = new DiscountedProduct_1.DiscountedProduct(10);
discount.DiscountedProduct(product1);
