import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmedValidator } from './ConfirmedValidator';
import {HttpserviceService} from '../httpservice.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private httpService:HttpserviceService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
      },
      {
        validator: ConfirmedValidator('password', 'passwordConfirm')
      }
    );
  }
  onSubmit(formData) {
    const userData = JSON.stringify(formData)
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;

    }

    //const userData = { ...formData };
    this.httpService.createUser(userData).subscribe(
      (data) => {
        this.router.navigate(['/login'])
      }
      ,(error => console.log(error))
    )
  }

}
