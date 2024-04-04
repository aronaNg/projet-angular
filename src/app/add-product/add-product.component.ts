import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductService } from '../product.service';
import { Company } from 'src/models/Company';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public product : Product
  public companies! : Company[]
  list_length!: number

  constructor(private service : ProductService, private servComp : CompanyService, private router: Router ) {
    this.product = new Product(this.service.list_length+1, "MyTitle", "MyDescription", 0, "MyCompany", "./assets/img/1.png",0, 0)
    this.servComp.getProduct().subscribe(data => {
    this.companies= data
    })
  }
  ngOnInit(): void {
  }
  addProduct(){
    this.service.addProduct(this.product).subscribe( data => {
    this.product = data
    })
    if (!this.servComp.findCompany(this.product.company)) {
      let newComp = new Company(this.servComp.list_length+1, this.product.company)
      this.servComp.addCompany(newComp).subscribe(data => {
        newComp = data
      })
    }
    this.router.navigateByUrl('/products');
  }
    }

