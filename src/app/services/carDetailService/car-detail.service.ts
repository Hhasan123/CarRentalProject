import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from 'src/app/models/carDetails/carDetails';
import { ListResponseModel } from 'src/app/models/listResponseModel';
@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44317/api/'

  constructor(private httpClient: HttpClient) {}
  getCarDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
}
