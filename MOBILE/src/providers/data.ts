import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Data {

	data: any;

	constructor(public http: HttpClient) {

	}

	load(){

			if(this.data){
				return Promise.resolve(this.data);
			}

		return this.http
		.get('assets/data/questions.json')
		.toPromise(); 		

	}

}