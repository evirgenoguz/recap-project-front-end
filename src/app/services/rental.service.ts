import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseMode } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44356/api/rentals/getrentaldetail";
  constructor(private httpClient : HttpClient) { }

  getRentalDetails() : Observable<RentalResponseMode>{
    return this.httpClient.get<RentalResponseMode>(this.apiUrl);
  }
}
