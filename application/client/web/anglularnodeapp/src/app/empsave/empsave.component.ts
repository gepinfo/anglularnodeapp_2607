import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpsaveService } from './empsave.service';





@Component({
  selector: 'app-empsave',
  templateUrl: './empsave.component.html',
  styleUrls: ['./empsave.component.scss'],
})

export class EmpsaveComponent implements OnInit {
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




    constructor (
        private empsaveService: EmpsaveService,
    ) { }

    ngOnInit() {
        this.entity1.created_by = sessionStorage.getItem('email') || ''; 
        this.entity2.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    Create() {
        this.empsaveService.Create(this.entity1).subscribe((data:any) => {
            this.entity1.empid = ''
 	 	this.entity1.Enter_Name = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}