 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

//import all the components

import { NormalCustomerComponent } from './normal-customer/normal-customer.component';
import { PremiumCustomerComponent } from './premium-customer/premium-customer.component';
import { NormalOrderComponent } from './normal-order/normal-order.component';
import { PremiumOrderComponent } from './premium-order/premium-order.component';

//define all route rules using js code 
const routes: Routes = [
{path:'',component:MycomponentComponent},
{path:'home',component:MycomponentComponent},
{path:'normal',component:NormalCustomerComponent},
{path:'premium',component:PremiumCustomerComponent,
children:[
  {path:'', redirectTo:'normalOrder',pathMatch:'full'},
{path:'normalOrder',component:NormalOrderComponent},
{path:'premiumOrder',component:PremiumOrderComponent}
]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
