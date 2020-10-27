import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpserviceService} from "../httpservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmedValidator} from "../sign-up/ConfirmedValidator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private httpService:HttpserviceService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: '',
        password: '',
      }
    );
  }
  onSubmit(formData) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('returned');
      return;

    }
    const userData = { ...formData };
    console.log(userData.email)
    let urlencoded = new URLSearchParams();
    urlencoded.set("email", userData.email);
    urlencoded.set("password", userData.password);
    this.httpService.login(urlencoded.toString()).subscribe(
      (data) => {
        console.log(data)
        this.httpService.emitChange(true)
      }
      ,(error => console.log(error))
    )
  }

}
