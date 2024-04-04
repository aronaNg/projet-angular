import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productfull',
  templateUrl: './productfull.component.html',
  styleUrls: ['./productfull.component.css']
})
export class ProductfullComponent implements OnInit {
  product! : Product

  constructor(private activatedroute : ActivatedRoute, service : ProductService) {
    const pid = parseInt(this.activatedroute.snapshot.paramMap.get('pid') || '0')
    this.product = service.getPrdByIndex(pid-1)
    }

  ngOnInit(): void {
  }

}
