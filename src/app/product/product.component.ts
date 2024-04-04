import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product !: Product
  @Input() prd_index !: number

  constructor(private myrouter: Router,private service : ProductService) { }
  decrement(event: Event){
    if (this.product.likes > 0)
    this.product.likes -=1;
    console.log(event)
    }
    doPrint(){
      console.log(this.product)
    }

    readMore() {
      this.myrouter.navigate(['/products/' + this.product.id])
      }

      increment(event : Event){
        this.product.likes += 1
        this.service.updateLikes(this.product)
        .subscribe(data => {
        this.product.likes = data.likes
        })
        }
        decrementer(event : Event){
        if (this.product.likes>0)
        this.product.likes -= 1 // -=1
        this.service.updateLikes(this.product)
        .subscribe(data => {
        this.product.likes = data.likes
        })
        }

  ngOnInit(): void {
  }

}
