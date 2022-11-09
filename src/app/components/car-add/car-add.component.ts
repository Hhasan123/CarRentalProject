import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/carService/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private carService:CarService,private toastrService:ToastrService) { }


  ngOnInit(): void {
    this.createCarAddForm()
  }

  createCarAddForm(){

    this.carAddForm=this.formBuilder.group({
      name:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required]
    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel=Object.assign({},this.carAddForm.value)  
      this.carService.add(carModel).subscribe(data=>{
        console.log(data.message)
        this.toastrService.success("New car added successfuly", "Added new car")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Error")
            
          }
          
        }
        
      })
    }else{
      this.toastrService.error("Data form has invalid parameter","Invalid data")
    }
    
  }
}
