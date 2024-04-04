import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/models/Company';

@Injectable({
providedIn: 'root'
})
export class CompanyService {
  list_length!: number
  response !: boolean
  constructor(private http : HttpClient) { }

  getProduct() : Observable<Company[]> {
  return this.http.get<Company[]>('http://localhost:3000/companies')
  }

  getDataLength() {
    this.http.get<Company[]>('http://localhost:3000/companies').subscribe( data => {
    this.list_length = (data).length
    })
  }

  findCompany(name : string) : boolean {
    this.http.get<boolean>('http://localhost:3000/companies?name=' + name).subscribe(
      data => {
      this.response = data
      }
    )
    return this.response
  }

  addCompany(company : Company): Observable<Company>{
    return this.http.post<Company>('http://localhost:3000/companies', company)
  }

}
