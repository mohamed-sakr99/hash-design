import { PersonalDataComponent } from './personal-data/personal-data.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'data', component : PersonalDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration : 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
