import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class EmpsaveService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    Create(entity1:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.WEB_API + '/entity1' + `?jwt_token=${jwt_token}`, entity1);
    }
}