import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
      providers: [],
      declarations: [ CardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div with class card-title', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    const element=fixture.debugElement.query(By.css('.card-title'));
  
    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('Apple')
  });

  it('should contain div with class card-body with text apple', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    const element=fixture.debugElement.query(By.css('.card-title'));

    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('Apple')
  });

  it('should have detailsdummy function',()=>{
    expect(component.detailsdummy).toBeTruthy();
  });
  it('should have Loginalert function',()=>{
    expect(component.loginalert).toBeTruthy();
  });
});
