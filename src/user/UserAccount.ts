export class UserAccount {
    private  readonly username:string
    private password:string
    protected email:string

    constructor (username:string,password:string,email:string){
        this.username = username
        this.password = password
        this.email = email
    }

    public getPassword():string{
        return this.password
    }

    public setPassword(password:string):void{
        this.password = password
    }

    public changePassword(oldPassword: string, newPassword: string){
        if(oldPassword === this.password){
            this.password = newPassword
            console.log ("เปลื่ยนรหัสผ่านสำเร็จ")
        }else{
            console.log("เปลื่ยนรหัสผ่านไม่สำเร็จ")
        }
    }

}
