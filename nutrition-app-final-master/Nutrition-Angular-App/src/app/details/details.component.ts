import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Details,Food,Specific,FoodNutrients, nutrient} from '../details';
import { ApiServiceService } from '../service/api-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any;
  constructor(private user:ApiServiceService){ }

  foodData: Food;
  specificData: Specific;
  foodNutrients: FoodNutrients[];
  nutrientData: nutrient;
  fdcId: any;
  foodname: any;
  ngOnInit(){
    this.fdcId=localStorage.getItem("fdcId");
    this.foodname=localStorage.getItem("foodname");
    this.user.getDetails(this.fdcId).subscribe(data=>{
      this.foodData = data;
      this.foodNutrients = this.foodData.foodNutrients;
      console.log(this.foodNutrients)
    })
   }
  }
  

  
 


