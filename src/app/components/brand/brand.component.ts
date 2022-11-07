import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brandResponseModels/brands';
import { BrandService } from 'src/app/services/brandService/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
brands:Brand[]=[]
dataLoaded=false;
  constructor(private brandService:BrandService) { }
getBrands(){
this.brandService.getBrands().subscribe(response=>{
  this.brands=response.data;
  this.dataLoaded=true;
})
}

  ngOnInit(): void {
    this.getBrands();
  }

}