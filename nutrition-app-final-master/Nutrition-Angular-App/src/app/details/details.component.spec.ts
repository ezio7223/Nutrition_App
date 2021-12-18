import { ComponentFixture, TestBed } from '@angular/core/testing';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from './details.component';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
        providers: [],
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a class table with name average amountunit', () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    const element=fixture.debugElement.query(By.css('.table-info'));

    expect(component).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('NameAverage AmountUnit');
  });
  it('should contain a class table with table-success', () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    const element=fixture.debugElement.query(By.css('.table-success'));

    expect(component).toBeTruthy();
    expect(element.nativeElement.textContent).toBe('');
  });
});
