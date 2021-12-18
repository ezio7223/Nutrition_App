import { TestBed } from '@angular/core/testing';
import { ApiServiceService } from './api-service.service';
import{HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('ApiServiceService', () => {
  let service: ApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
        providers: [],

    });
    service = TestBed.inject(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('it should have addfavorite function', () => {
    expect(service.addfav).toBeTruthy();
  });
  it('it should have getDetails function', () => {
    expect(service.getDetails).toBeTruthy();
  });
  it('it should have getRecomended function', () => {
    expect(service.getRec).toBeTruthy();
  });
  it('it should have getsearch function', () => {
    expect(service.getSearch).toBeTruthy();
  });
  it('it should have getdata function', () => {
    expect(service.getdata).toBeTruthy();
  });
  it('it should have getfav function', () => {
    expect(service.getfav).toBeTruthy();
  });


});
