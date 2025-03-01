"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccount = void 0;
const UserAccount_1 = require("./UserAccount");
class AdminAccount extends UserAccount_1.UserAccount {
    constructor(username, password, email) {
        super(username, password, email);
    }
    // public adminChangePassword(oldPassword: string, newPassword: string, userAccount: UserAccount): void {
    //     if(
    //         userAccount.getPassword() === oldPassword
    //     ){
    //         userAccount.changePassword(oldPassword,newPassword)
    //     }
    // }
    adminChangePassword(newPassword, userAccount) {
        userAccount.setPassword(newPassword);
        console.log("เปลื่ยนรหัสผ่านผู้ใช้สำเร็จ");
    }
}
exports.AdminAccount = AdminAccount;
