export class BankAccount {
    private balance:number
    protected ownerName:string
    readonly accountNumber:string
    
    
    constructor (accountNumber:string,balance:number,ownerName:string){
        this.accountNumber = accountNumber
        this.balance = balance
        this.ownerName = ownerName
    }

    public deposit(amount: number):void{
        if (amount > 0) {
            this.balance + amount;
            console.log(`Deposited: ${amount},new balance: ${this.balance}`);
        }else{
            console.log("Deposit faild Amount must be a positive Number.");
        }
    }

    public withdraw(amount: number):void{
        if (amount <= this.balance && amount > 0){
            this.balance -= amount;
            console.log(`Withdraw: ${amount},new balance: ${this.balance}`);
        }else{
            console.log("Withdraw faild! Insufficient balance");
        }
    }
    
    getBalance(): number {
    return this.balance;
    }

    public getOwnerName():string{
        return this.ownerName;
    }
}
