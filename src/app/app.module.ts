import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { MypipePipe } from './mypipe.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { ProductfullComponent } from './productfull/productfull.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { AddProductComponent } from './add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    MypipePipe,
    NavbarComponent,
    ContactComponent,
    AccueilComponent,
    MoncompteComponent,
    ProductfullComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
