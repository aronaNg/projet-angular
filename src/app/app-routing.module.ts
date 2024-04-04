import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { ProductfullComponent } from './productfull/productfull.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'contact', component: ContactComponent},
  {path:'products', component: ProductlistComponent},
  {path:'moncompte', component: MoncompteComponent},
  {path:'products/:pid', component: ProductfullComponent},
  {path : 'addproduct', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
