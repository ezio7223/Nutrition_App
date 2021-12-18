import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteItems, recdetails } from '../details';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-fav-recomnd',
  templateUrl: './fav-recomnd.component.html',
  styleUrls: ['./fav-recomnd.component.css']
})
export class FavRecomndComponent implements OnInit {

  constructor(private internal: ApiServiceService,private route: Router) { }
  favDetails:FavoriteItems;
  favalldetails:FavoriteItems;
  uname: string;
  
  ngOnInit(){
    this.uname=localStorage.getItem("uname");
    this.getfavorite();
    this.getallfavorite();

  }
  detail(fdcId: any){
    localStorage.setItem("fdcId",fdcId);
    this.route.navigate(["details"])
  }
  getfavorite(){
    this.internal.getfav(this.uname).subscribe((data)=>{
      this.favDetails = data;
      console.log(this.favDetails);
    })
  }
  getallfavorite(){
    this.internal.getallfav().subscribe((data)=>{
      this.favalldetails = data;
      console.log(this.favalldetails);
    })
  }
  deleteFav(){
    this.internal.deleteFav(this.uname).subscribe(data=>{
      alert("Favorite deleted")
    })
  }
}
