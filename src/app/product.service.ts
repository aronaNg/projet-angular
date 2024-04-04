import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/models/Company';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // backUrl = 'http://localhost:3000/products'
  product!: Product
  Array : Product[] = []
  list_length!: number

  constructor(private http: HttpClient) { }
  getProduct() : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
    }

    getPrdByIndex(prd_idx: number): Product {
      this.http.get<Product>('http://localhost:3000/products/'+ prd_idx)
      .subscribe(data => {
      this.product = data
      })
      return this.product
      }

      updateLikes(product : Product) : Observable<Product>{
        return this.http.put<Product>('http://localhost:3000/products/' + product.id, product)
        }
      getDatabyCompany(company : Company) : Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:3000/products?company=' + company.name)
      }
      addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>('http://localhost:3000/products', product)
      }
      getDataLength() {
        this.http.get<Company[]>('http://localhost:3000/companies').subscribe( data => {
        this.list_length = (data).length
        })
      }




  // getProducts() : Product[] {
  //   this.Array = []
    // this.Array.push(new Product(1,'Image 1', 'Ma description 1', 10, 'UTBM', 'https://placehold.jp/500x500.png'))
    // this.Array.push(new Product(2,'Image 2', 'Ma description 2', 0, 'Google', 'https://placehold.jp/500x500.png'))
    // this.Array.push(new Product(3,'Image 3', 'Ma description 3', 0, 'GE', 'https://placehold.jp/500x500.png'))
    // this.Array.push(new Product(4,'Image 4', 'Ma description 4', 40, 'TQS', 'https://placehold.jp/500x500.png'))
  //   this.Array.push(new Product(1,'Image 1', 'Ma description 5', 10, 'UTBM', './assets/img/1.png',0,20))
  //   this.Array.push(new Product(2,'Image 2', 'Ma description 6', 0, 'Google', './assets/img/2.png',12,30))
  //   this.Array.push(new Product(3,'Image 3', 'Ma description 7', 0, 'GE', './assets/img/3.png',9,40))
  //   this.Array.push(new Product(4,'Image 4', 'Ma description 8', 40, 'TQS', './assets/img/4.png',3,50))
  //   return this.Array

  // }
  // getPrdByIndex(prd_idx: number): Product {
  //   return this.Array[prd_idx]
  //   }

}
