import { Component, OnInit } from '@angular/core';
import { RentDetails } from 'src/app/models/rentalDetails/rentalDetails';
import { RentDetailServiceService } from 'src/app/services/rentDetailsService/rent-detail-service.service';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css'],
})
export class RentDetailsComponent implements OnInit {
  rentDetails: RentDetails[] = [];
  dataLoaded = false;

  constructor(private rentDetailService: RentDetailServiceService) {}

  ngOnInit(): void {
    this.getRentDetails();
  }
  getRentDetails() {
    this.rentDetailService.getRentDetails().subscribe((response) => {
      this.rentDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
