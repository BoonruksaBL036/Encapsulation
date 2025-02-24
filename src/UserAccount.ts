export class UserAccount {
    private username:string
    private password:string
    private email:string

    constructor (username:string,password:string,email:string){
        this.username = username
        this.password = password
        this.email = email
    }

    public changePassword(oldPassword: string, newPassword: string){
        0
    }

}

class AdminAccount extends UserAccount{
    constructor (username:string,password:string,email:string){
        super(username,password,email)
    }
}