import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component' ;
import { FavRecomndComponent } from './fav-recomnd/fav-recomnd.component';
import { LoginpagesComponent } from './loginpages/loginpages.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'details',component:DetailsComponent},
  {path:'cards',component:CardsComponent},{
    path:"",component:CardsComponent
  },{
    path:'afterlogin',component:LoginpagesComponent,canActivate:[AuthGuard]
  },{
    path:'search', component:SearchComponent
  },{
    path:'user',component:UserComponent,
    children:[{path:'registration',component:RegistrationComponent}, { path: 'login', component: LoginComponent }],
  },{
    path:'fav-recmended',component:FavRecomndComponent,canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
