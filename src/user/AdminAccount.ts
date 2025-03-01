import { UserAccount } from "./UserAccount";

export class AdminAccount extends UserAccount {
    constructor (username:string,password:string,email:string){
        super(username,password,email)
    }

    // public adminChangePassword(oldPassword: string, newPassword: string, userAccount: UserAccount): void {
    //     if(
    //         userAccount.getPassword() === oldPassword
    //     ){
    //         userAccount.changePassword(oldPassword,newPassword)
    //     }
    // }

    public adminChangePassword(newPassword: string, userAccount: UserAccount): void {
        userAccount.setPassword(newPassword)
        console.log("เปลื่ยนรหัสผ่านผู้ใช้สำเร็จ")
    }

} 