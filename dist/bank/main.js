"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
const SavingAccount_1 = require("./SavingAccount");
const nnAccount = new BankAccount_1.BankAccount("123456", 50000, "Boonruksa");
const nnSavingAccount = new SavingAccount_1.SavingAccount("s123456", 100000, "Boonruksa", 0.09);
console.log(nnAccount.getOwnerName());
console.log(nnAccount.getBalance());
nnSavingAccount.applyInterest();
nnAccount.getOwnerName();
