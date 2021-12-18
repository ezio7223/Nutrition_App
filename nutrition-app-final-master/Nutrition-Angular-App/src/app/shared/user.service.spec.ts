import { TestBed,inject } from '@angular/core/testing';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';
import {  FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { element } from 'protractor';


describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
      imports: [RouterTestingModule,
        HttpClientTestingModule,ReactiveFormsModule],
        providers: [UserService],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service.formModel).toBeTruthy();
  });
  it('should have comparepassword function',()=>{
    expect(service.comparePasswords).toBeTruthy();
  });
  it('should have register function',()=>{
   expect(service.register).toBeTruthy();
  });
  it('should have login function',()=>{
    expect(service.login).toBeTruthy();
   });
   it('should have getuserprofile function',()=>{
    expect(service.getUserProfile).toBeTruthy();
   });
});
