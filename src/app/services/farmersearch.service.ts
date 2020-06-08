import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/farmers';

@Injectable({
  providedIn: 'root'
})
export class FarmersearchService {

  constructor(private http: HttpClient) { }

  searchFarmers(searchParam) {
    return this.http.get(`${baseUrl}?search=${searchParam}`);
  }

}
