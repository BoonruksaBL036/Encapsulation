"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminAccount_1 = require("./AdminAccount");
const UserAccount_1 = require("./UserAccount");
const uuAccount = new UserAccount_1.UserAccount("Boonruksa", "boon1234", "Test1@gmeil.com");
const uuAdmin = new AdminAccount_1.AdminAccount("Wisarut", "J1234", "Admin@gmail.com");
// uuAccount.changePassword("boon123","B1234")
uuAdmin.adminChangePassword("Wisarut1234", uuAccount);
