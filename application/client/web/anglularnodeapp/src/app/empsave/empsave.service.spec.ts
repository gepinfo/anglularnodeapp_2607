import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmpsaveService } from './empsave.service';
import { SharedService } from '../../shared/shared.service';

describe('empsaveService', () => {
  let service: EmpsaveService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ EmpsaveService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(EmpsaveService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  // test case gp create
  it('should send a POST request to the server', () => {
    const entity1 = { 
    empid: 'empid 1'
    Enter_Name: 'Enter_Name 1'
    }
    const entity2 = { 
    empid: 'empid 1'
    enter_name: 'enter_name 1'
    }
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.Create(entity1entity2).subscribe(response => {
      expect(response).toEqual(entity1entity2)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/entity1?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(entity1entity2);

    // Flush the mocked response
    req.flush(entity1entity2);
  });



  
});
