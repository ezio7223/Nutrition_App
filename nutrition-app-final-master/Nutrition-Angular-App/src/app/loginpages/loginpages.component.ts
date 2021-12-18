import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteItems } from '../details';
import { ApiServiceService } from '../service/api-service.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-loginpages',
  templateUrl: './loginpages.component.html',
  styleUrls: ['./loginpages.component.css']
})
export class LoginpagesComponent implements OnInit {
  
  userDetails
  constructor(private route:Router,private service: UserService,private internal: ApiServiceService ) { }
  favDetails:FavoriteItems;
  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        localStorage.setItem("uname",this.userDetails.userName);

      },
      err => {
        console.log(err);
      },
    );
    
  }
  details(){
    this.route.navigate(["details"])
  }
  fav(){
    this.route.navigate(["fav-recmended"])
  }
}
