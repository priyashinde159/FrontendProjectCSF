import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { User } from 'src/app/Shared/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User=new User();
  msg='';
  constructor(private service:UserServiceService, private router:Router){};

  ngOnInit() {
  };

  loginUser(){
    this.service.loginUser(this.user).subscribe((data)=>{
      console.log("Response received");
      this.router.navigate(['/shop']);
    },error=>{
      console.log("Exception occured");
      this.msg="Bad Credentials, please enter valid data";
    });
  };
  }

