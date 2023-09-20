import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { User } from 'src/app/Shared/User';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = new User();

  msg: any = '';
  constructor(private service: UserServiceService, private router: Router) { }
  ngOnInit() {

  };
  submitForm() {
    this.save();
  }
  save() {
    this.service.createUser(this.user).subscribe((data) => {
      console.log("Response received");
      this.msg = "Registration Successfully";
      this.router.navigate(['/login']);
    }, (error) => {
      console.log("Exception occured");
      this.msg = error.error;
    });
    
}
gotoList() {
  
}
}