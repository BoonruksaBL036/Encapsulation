"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    changePassword(oldPassword, newPassword) {
        0;
    }
}
exports.UserAccount = UserAccount;
class AdminAccount extends UserAccount {
    constructor(username, password, email) {
        super(username, password, email);
    }
}
