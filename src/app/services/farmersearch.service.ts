import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmerSearchAbstractProvider, SearchParams } from '../providers/FarmerSearchAbstractProvider';
import { Farmer } from '../model/Farmer';

const baseUrl = 'http://localhost:8080/api/farmers';

@Injectable({
  providedIn: 'root'
})
export class FarmersearchService implements FarmerSearchAbstractProvider {

  constructor(private http: HttpClient) { }

  searchFarmers(searchParam: SearchParams): Promise<Farmer[]> {
    return this.http.get(`${baseUrl}?search=${searchParam.nameOrDoc}`)
      .toPromise() as Promise<Farmer[]>
  }

}
