import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FavRecomndComponent } from './fav-recomnd.component';
import { FavoriteItems } from '../details';
import { element } from 'protractor';

describe('FavRecomndComponent', () => {
  let component: FavRecomndComponent;
  let fixture: ComponentFixture<FavRecomndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
      providers: [],
      declarations: [ FavRecomndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRecomndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div with class navbar-brand comtains Favorite Items', () => {
    const fixture = TestBed.createComponent(FavRecomndComponent);
    const element=fixture.debugElement.query(By.css('.navbar-brand'));
    // const app = fixture.componentInstance;
    // expect(app).toBeTruthy();
    expect(component).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('Favorite Items')
  });
  // it('should contain div with class card-link', () => {
  //   const fixture = TestBed.createComponent(FavRecomndComponent);
  //   const element=fixture.debugElement.query(By.css('.card-link'));
  //   // const app = fixture.componentInstance;
  //   // expect(app).toBeTruthy();
  //   expect(component).toBeTruthy();
  //   expect(element.nativeElement.textContent).toBe('Item Name')
  // });
  // it('should contain div with class navbar-brand comtains Favorite Items', () => {
  //   const fixture = TestBed.createComponent(FavRecomndComponent);
  //   const element=fixture.debugElement.query(By.css('.navbar-brand'));
  //   // const app = fixture.componentInstance;
  //   // expect(app).toBeTruthy();
  //   expect(component).toBeTruthy();
  //   expect(element.nativeElement.textContent).toBe('Favorite Items')
  // });
  // it('test demands redirection', fakeAsync(() => {

  //   const element=fixture.debugElement.query(By.css('.card-subtitle mb-2'));
  //   expect(component).toBeTruthy();
  //   expect(element.nativeElement.click()).toBe('')
  // it('should have register function',()=>{
  //   expect(FavRecomndComponent).toBeTruthy();
  //  });
  // it('should have register function',()=>{
  //   expect(FavRecomndComponent).toBeTruthy();
  //   expect(FavoriteItems.toString).toBe('')
  //  });
  
    
  
  // }));
   
  
 
});
