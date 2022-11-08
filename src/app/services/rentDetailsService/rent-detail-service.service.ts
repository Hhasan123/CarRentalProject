import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentDetailsResponseModel } from 'src/app/models/rentalDetails/rentDetailsResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentDetailServiceService {
  apiUrl = 'https://localhost:44317/api/rentals/rentaldetails'
  constructor(private httpClient: HttpClient) {}
  getRentDetails(): Observable<RentDetailsResponseModel> {
    return this.httpClient.get<RentDetailsResponseModel>(this.apiUrl);
  }
}
