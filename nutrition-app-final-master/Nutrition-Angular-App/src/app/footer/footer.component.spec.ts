import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a class with navbar-brand', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const element=fixture.debugElement.query(By.css('.navbar-brand'));
 
    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('All Rights Reserved')
  });
});
