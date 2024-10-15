import { Component, OnInit, ViewChild } from '@angular/core';
import { PersaveService } from './persave.service';





@Component({
  selector: 'app-persave',
  templateUrl: './persave.component.html',
  styleUrls: ['./persave.component.scss'],
})

export class PersaveComponent implements OnInit {
    columnDefs: any = [{ headerName: 'empid', field: 'empid'  },{ headerName: 'empname', field: 'enter_name'  },];
    public entity1:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        empid: '',
        Enter_Name: '',
    }
    public entity2:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        empid: '',
        enter_name: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private persaveService: PersaveService,
    ) { }

    ngOnInit() {
        this.entity1.created_by = sessionStorage.getItem('email') || ''; 
        this.entity2.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }


}