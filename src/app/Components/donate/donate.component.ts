import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Donation } from 'src/app/Shared/donation';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  donarForm!: FormGroup;
  file : File | null = null;
  donation : Donation =new Donation;
  constructor(private service:UserServiceService , private router:Router){}
  
  fileSelect(event : Event) : void{
    if ((event.target as HTMLInputElement).files && (event!.target as HTMLInputElement)!.files!.length) {
      this.file = (event!.target! as HTMLInputElement)!.files![0];
      console.log(this.file!.name);
    }
  }
  
    submitForm() {
      this.donation = this.donarForm.value;
      this.service.addDonar(this.file!, this.donation).subscribe(
        data => {
          this.router.navigate(['/home']) 
                  if(data != 'File is Null')
                  {

                    console.log("donar Saved");
                    
                  }
                },        
        err => { console.log(err)}
      ); 
      
}
}
