import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsResponseModel } from '../../models/carDetails/carDetailsResponseModel';
@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44317/api/cars/getcardetails'

  constructor(private httpClient: HttpClient) {}
  getCarDetails(): Observable<CarDetailsResponseModel> {
    return this.httpClient.get<CarDetailsResponseModel>(this.apiUrl);
  }
}
