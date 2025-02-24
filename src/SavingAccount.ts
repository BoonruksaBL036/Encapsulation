import { BankAccount } from "./BankAccount";

export class SavingAccount extends BankAccount{ 
        private interestRate: number;

    constructor (accountNumber:string,balance:number,ownerName:string,interestRate:number) {
    super(accountNumber,balance ,ownerName);
    this.interestRate = interestRate;
    }

    public applyInterest ():void{
         const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
    }

}