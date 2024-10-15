import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersaveComponent } from './persave.component';
import { PersaveService } from './persave.service'
import { of, throwError } from 'rxjs';
import { SharedService } from 'src/shared/shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersaveComponent } from './persave.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


describe('PersaveComponent', () => {
  let component: PersaveComponent;
  let fixture: ComponentFixture<PersaveComponent>;
  let service: PersaveService;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let httpClient: HttpClientTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, 
        FormsModule, ReactiveFormsModule,
        NgbPaginationModule,
      ],
      declarations: [ PersaveComponent ],
      providers: [ PersaveService, 
        { provide: SharedService, useValue: sharedServiceMock},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersaveComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PersaveService);
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
  


});