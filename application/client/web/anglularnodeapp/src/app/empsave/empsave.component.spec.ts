import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsaveComponent } from './empsave.component';
import { EmpsaveService } from './empsave.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpsaveComponent } from './empsave.component';


describe('EmpsaveComponent', () => {
  let component: EmpsaveComponent;
  let fixture: ComponentFixture<EmpsaveComponent>;
  let service: EmpsaveService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ EmpsaveComponent ],
      providers: [ EmpsaveService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsaveComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EmpsaveService);
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnInit application onload
  it('should set the created_by property with the value from sessionStorage', () => {
    const mockEmail = 'test@example.com';
    spyOn(sessionStorage, 'getItem').and.returnValue(mockEmail);
    component.ngOnInit();

    expect(sessionStorage.getItem).toHaveBeenCalledWith('email');
    expect(component.entity1.created_by).toEqual(mockEmail);
    expect(component.entity2.created_by).toEqual(mockEmail);

  });
  

  // Create test case file
  it('should call Create and reset  properties', () => {

    // Create a spy for the Create method of the service
    spyOn(service, 'Create').and.returnValue(of({}));
    
    // Set values for entity1 properties
    component.entity1.empid = 'Test empid';
    component.entity1.Enter_Name = 'Test Enter_Name';
    // Set values for entity2 properties
    component.entity2.empid = 'Test empid';
    component.entity2.enter_name = 'Test enter_name';


    // Call the Create method
    component.Create();


    // Expect the Create method to have been called with the tickets object
    expect(service.Create).toHaveBeenCalledWith(component.entity1entity2);

    // Expect the entity1 properties to be reset
    expect(component.entity1.empid).toBe('');
    expect(component.entity1.Enter_Name).toBe('');
    // Expect the entity2 properties to be reset
    expect(component.entity2.empid).toBe('');
    expect(component.entity2.enter_name).toBe('');
  });
  it('should log error on update Create failure', () => {
    const error = new Error('GpCreate failed');
    spyOn(service, 'Create').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Create();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });









});