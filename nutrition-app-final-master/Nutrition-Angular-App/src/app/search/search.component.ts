import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Details,Food,Specific,FoodNutrients, nutrient, FavoriteItems, recdetails} from '../details';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private user:ApiServiceService,private route:Router,private toastr: ToastrService) { }
  totallength:any;
  page:number=1
  foodData: Food;
  DetailsData: Details;
  specificdata: Specific;
  foodNutrients: FoodNutrients[];
  obj:FavoriteItems=new FavoriteItems();
  rec:recdetails =new recdetails();
  uname: string;
  value: string;
  ngOnInit(){
    this.uname=localStorage.getItem("uname");
    this.value=localStorage.getItem("value");
    
    this.user.getSearch(this.value).subscribe(data=>{
      this.foodData = data;
      this.totallength = data.length;
      this.DetailsData = data;
      this.foodData=this.DetailsData.foods;
      console.log(this.DetailsData);
    })
    
  }
  details(fdcId: any,description: any){
    localStorage.setItem("fdcId",fdcId);
    localStorage.setItem("foodname",description);
    this.route.navigate(["details"])
  }

  favorite(fdcId,description,foodCategory){
    if (localStorage.getItem('token')!=null){
      this.obj.userId=this.uname
      this.obj.fdcId=fdcId;
      this.obj.description=description;
      this.obj.itemName=foodCategory;
      this.user.addfav(this.obj).subscribe(data=>{
        console.log(this.obj)
      })
    }
    else {
      this.route.navigate(['/user/login']);
      return false}
  }
}
