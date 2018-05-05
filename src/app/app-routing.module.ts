import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { ActionComponent } from './action/action.component';
import { ScoreComponent } from './score/score.component';
import { PlanComponent } from './plan/plan.component';
import { DataComponent } from './data/data.component';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
            data: {
                title: 'Dashboard'
            },
        },
        {
            path: 'location',
            component: LocationComponent,
            data: {
                title: 'Location'
            },
        },
        {
            path: 'action',
            component: ActionComponent,
            data: {
                title: 'Action Plan'
            },
        },
        {
            path: 'score',
            component: ScoreComponent,
            data: {
                title: 'TGIF Score'
            },
        },
        {
            path: 'plan',
            component: PlanComponent,
            data: {
                title: 'Action Plan'
            },
        },
        {
            path: 'data',
            component: DataComponent,
            data: {
                title: 'Data'
            },
        }
    ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
