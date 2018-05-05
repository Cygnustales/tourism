import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {ClarityModule} from '@clr/angular';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { ActionComponent } from './action/action.component';
import { ScoreComponent } from './score/score.component';
import { PlanComponent } from './plan/plan.component';
import { NouisliderModule } from 'ng2-nouislider';
import { DataService } from './services/data.service';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LocationComponent,
    ActionComponent,
    ScoreComponent,
    PlanComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    NgxEchartsModule,
    FormsModule,
    NouisliderModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
