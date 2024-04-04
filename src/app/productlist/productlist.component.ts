import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductService } from '../product.service';
import { CompanyService } from '../company.service';
import { Company } from 'src/models/Company';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  ProductArray : Product[] = []
  companies: Company[] = []

  constructor(public service : ProductService,private compServ: CompanyService) {
    // this.ProductArray = service.getProducts()
    this.service.getProduct().subscribe( data => {
      this.ProductArray = data
      })
      this.compServ.getProduct().subscribe(data => {
        this.companies = data
        })
  }



  ngOnInit(): void {
    // this.ProductArray = []
    // this.ProductArray.push(new Product('Image 1', 'Ma description 1', 10, 'UTBM', 'https://placehold.jp/500x500.png'))
    // this.ProductArray.push(new Product('Image 2', 'Ma description 2', 0, 'Google', 'https://placehold.jp/500x500.png'))
    // this.ProductArray.push(new Product('Image 3', 'Ma description 3', 0, 'GE', 'https://placehold.jp/500x500.png'))
    // this.ProductArray.push(new Product('Image 4', 'Ma description 4', 40, 'TQS', 'https://placehold.jp/500x500.png'))

    // this.ProductArray.push(new Product('Image 1', 'Ma description 1', 10, 'UTBM', './assets/img/1.png'))
    // this.ProductArray.push(new Product('Image 2', 'Ma description 2', 0, 'Google', './assets/img/2.png'))
    // this.ProductArray.push(new Product('Image 3', 'Ma description 3', 0, 'GE', './assets/img/3.png'))
    // this.ProductArray.push(new Product('Image 4', 'Ma description 4', 40, 'TQS', './assets/img/4.png'))
  }

  FilterbyComp(company : Company){
    if (company.name != 'All')
      this.service.getDatabyCompany(company).subscribe(data => {
      this.ProductArray = data
    })
    else
      this.service.getProduct().subscribe( data => {
      this.ProductArray = data
    })
    }



}
