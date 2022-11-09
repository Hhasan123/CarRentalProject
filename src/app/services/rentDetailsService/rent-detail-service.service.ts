import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentDetails } from 'src/app/models/rentalDetails/rentalDetails';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentDetailServiceService {
  apiUrl = 'https://localhost:44317/api/rentals/rentaldetails'

  constructor(private httpClient: HttpClient) {}
  
  getRentDetails(): Observable<ListResponseModel<RentDetails>> {
    return this.httpClient.get<ListResponseModel<RentDetails>>(this.apiUrl);
  }
}
