import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ItService2Component } from './it-service2/it-service2.component';
import { ItServiceComponent } from './it-service/it-service.component';
import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'it-service', component:ItServiceComponent},
  {path:'it-service2', component:ItService2Component},
  {path:'cloud-computing', component:CloudComputingComponent},
  {path:'software-development', component:SoftwareDevelopmentComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'**', component:LandingPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
