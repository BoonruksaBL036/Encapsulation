import { BankAccount } from "./BankAccount";
import { SavingAccount } from "./SavingAccount";

const nnAccount = new BankAccount("123456",50000,"Boonruksa");
const nnSavingAccount = new SavingAccount("s123456",100000,"Boonruksa",0.09);
console.log(nnAccount.getOwnerName());
console.log(nnAccount.getBalance());
nnSavingAccount.applyInterest();
nnAccount.getOwnerName();
