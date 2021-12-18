import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpagesComponent } from './loginpages.component';

describe('LoginpagesComponent', () => {
  let component: LoginpagesComponent;
  let fixture: ComponentFixture<LoginpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
