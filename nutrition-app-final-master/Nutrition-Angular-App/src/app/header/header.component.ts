import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
values: string;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.route.navigate(["details"])
  }
  search(){
    localStorage.setItem("value",this.values);
    this.route.navigate(["search"])
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/user/login']);
  }
  check()
  {
    if(localStorage.getItem('token')!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
}
