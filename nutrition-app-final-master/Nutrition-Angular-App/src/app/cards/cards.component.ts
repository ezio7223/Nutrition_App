import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../details';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  values: string;
  constructor(private route:Router,private user:ApiServiceService) { }
  listcomments: Details[];
  totallength:any;
  page:number=1
  ngOnInit(): void{

  }
  detailsdummy(fdcid: any,description: any){
    localStorage.setItem("fdcId",fdcid);
    localStorage.setItem("foodname",description);
    this.route.navigate(["details"])
  }
  loginalert(){
    alert("Sign in To Continue")
  }
  food(food:any){

  }


}
