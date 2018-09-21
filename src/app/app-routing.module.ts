import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalInfoComponent} from './adding-user/personal-info/personal-info.component';
import {RolesComponent} from './adding-user/roles/roles.component';
import {SummaryComponent} from './adding-user/summary/summary.component';
import {AddingUserComponent} from './adding-user/adding-user.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: AddingUserComponent, children: [
      {path: '', component: PersonalInfoComponent },
      {path: 'sum', component: SummaryComponent },
      {path: 'roles', component: RolesComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
