import { AdminAccount } from "./AdminAccount";
import { UserAccount } from "./UserAccount";

const uuAccount = new UserAccount("Boonruksa","boon1234","Test1@gmeil.com")
const uuAdmin = new AdminAccount("Wisarut","J1234","Admin@gmail.com")

// uuAccount.changePassword("boon123","B1234")
uuAdmin.adminChangePassword("Wisarut1234",uuAccount)