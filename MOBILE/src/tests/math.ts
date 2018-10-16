import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MATH} from "./mathSource";

@Injectable()
export class mathProvider {

  private maths: any;
	data: any;  


  constructor(public http: HttpClient) {
    this.maths = MATH;    
  }

  getAllmaths() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }


  getAll() {
    return this.maths;
  }

  getItem(id) {
    for (var i = 0; i < this.maths.length; i++) {
      if (this.maths[i].id === parseInt(id)) {
        return this.maths[i];
      }
    }
    return null;
  }

  remove(item) {
    this.maths.splice(this.maths.indexOf(item), 1);
  }  


  solvePostfix(postfixs: string) {
    return eval(postfixs);
  }  

	loadMultiplicacion(){

		return this.http.get('/../src/assets/data/questions_multiplicacion.json') 		

	}  

}
