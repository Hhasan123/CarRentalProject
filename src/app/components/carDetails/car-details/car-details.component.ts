import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails/carDetails';
import { CarDetailService } from 'src/app/services/carDetailService/car-detail.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carDetails:CarDetails[]=[]
dataLoaded=false
  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
        this.getCarDetails()
  }

  getCarDetails(){
this.carDetailService.getCarDetails().subscribe(response=>{
  this.carDetails=response.data
  this.dataLoaded=true;
})
  }
}
