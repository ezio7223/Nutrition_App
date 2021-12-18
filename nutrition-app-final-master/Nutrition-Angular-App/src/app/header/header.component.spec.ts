import { ComponentFixture, TestBed } from '@angular/core/testing';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
      providers: [],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should have login function', () => {
    expect(component.login).toBeTruthy();
  });
  it('it should have search function', () => {
    expect(component.search).toBeTruthy();
  });
  it('should have logout function', () => {
    expect(component.logout).toBeTruthy();
  });
  it('should contain div with class navbar-brand contains nutrition', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const element=fixture.debugElement.query(By.css('.navbar-brand'));

    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('Nutrition App ');
  });
  it('should contain a class dropdown-item contains logout', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const element=fixture.debugElement.query(By.css('.dropdown-item'));

    expect(element.nativeElement.textContent).toBe('Profile');
  });

});
