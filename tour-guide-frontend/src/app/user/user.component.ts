import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpserviceService} from "../httpservice.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {checkPasswords} from "./passwordchecker";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userdetails;
  passwordChangeForm:FormGroup;
  userDetailsForm:FormGroup
  constructor(private router: Router, private route: ActivatedRoute,private httpService: HttpserviceService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.httpService.getCurrentUser().subscribe(user => {
      this.userdetails = user;
      console.log(user);
    })
    this.userDetailsForm = this.formBuilder.group(
      {
        email: '',
        name: '',

      }
    );
    this.passwordChangeForm = this.formBuilder.group(
      {
        passwordCurrent:'',
        password:['',Validators.minLength(8)],
        passwordConfirm:['',Validators.minLength(8)]
      },{validator: checkPasswords}
    )
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('passwordConfirm').value;

    return pass === confirmPass ? null : { notSame: true }
  }
  onSubmit(formData){
    const userData = formData

    console.log(userData)
    if (this.userDetailsForm.invalid) {
      return;

    }

    this.httpService.updateUser(userData).subscribe( (res)=> {
      this.httpService.getCurrentUser().subscribe(user => {
        this.userdetails = user;
        console.log(user);
      })
      },(error => console.log(error))
    )
    this.userDetailsForm.setValue({name:'',email:''})

  }
  passwordChangeSubmit(formdata){
    console.log(formdata)
    if(this.passwordChangeForm.invalid){
      return;
    }
    this.httpService.updatePassword(formdata).subscribe((res)=>{
      localStorage.setItem('jwt',JSON.stringify(res.token))

    })
    this.passwordChangeForm.setValue({passwordCurrent:'',password:'',passwordConfirm:''})

  }

}
