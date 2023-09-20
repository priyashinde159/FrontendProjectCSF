export class User{
    userId : number;
    userName :string;
    email :string ;
    contact : number ;
    password : string ;
    // repeatPassword: string;

    constructor(){
        this.userId=0;
        this.userName= '';
        this.email= '';
        this.contact = 0;
        this.password = '';
        // this.repeatPassword='';
    }

  
}

export class Login{
    userName! : string;
    password! : string;

   
}