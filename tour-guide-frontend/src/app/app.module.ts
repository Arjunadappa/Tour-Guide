import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component'
import { ExploreComponent } from './explore/explore.component';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    OverviewComponent,
    ExploreComponent,
    DetailsComponent,
    UserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        IonicModule,
        CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
