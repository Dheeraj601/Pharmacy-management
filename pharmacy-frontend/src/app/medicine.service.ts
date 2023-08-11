import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseurl = "http://localhost:8080/api/v1/medicines";
  constructor(private httpClient: HttpClient) { }

  getMedicineList(): Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseurl}`)
  }

  createMedicine(medicine: Medicine): Observable<object>{
    return this.httpClient.post(`${this.baseurl}`, medicine);
  }

  getMedicineById(mid:number): Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseurl}/${mid}`);
  }

  updateMedicine(mid:number, value: any): Observable<Object>{
    return this.httpClient.put(`${this.baseurl}/${value.mid}`, value);
  }

  deleteMedicine(mid:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseurl}/${mid}`);
  }
}
