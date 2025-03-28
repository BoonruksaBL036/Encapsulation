"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(amount) {
        if (amount > 0) {
            this.speed += amount;
            console.log(`ความเร็วตอนนี้ ${this.speed}/ซม.`);
        }
    }
    brake(amount) {
        if (amount > 0 && amount <= this.speed) {
            this.speed -= amount;
            console.log(`ความเร็วลดลงเหลือ ${this.speed}/ซม.`);
        }
    }
}
exports.Car = Car;
