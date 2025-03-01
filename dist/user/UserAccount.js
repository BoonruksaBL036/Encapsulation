"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    changePassword(oldPassword, newPassword) {
        if (oldPassword === this.password) {
            this.password = newPassword;
            console.log("เปลื่ยนรหัสผ่านสำเร็จ");
        }
        else {
            console.log("เปลื่ยนรหัสผ่านไม่สำเร็จ");
        }
    }
}
exports.UserAccount = UserAccount;
