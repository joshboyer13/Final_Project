import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
{
  path: '',
  component: HomepageComponent
},
{
  path: 'Logout',
  component: LogoutComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'Signup',
  component: SignupComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'budget',
  component: BudgetComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
