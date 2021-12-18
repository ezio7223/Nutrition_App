import { ComponentFixture, TestBed } from '@angular/core/testing';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from './user.component';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
        providers: [],
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div with class tab-header', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const element=fixture.debugElement.query(By.css('.tab-header'));
 
    expect(component).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('Sign InSign Up');
  });
 
  
});
