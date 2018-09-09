import {Injectable} from "@angular/core";
import {MATH} from "./math";

@Injectable()
export class mathService {
  private maths: any;

  constructor() {
    this.maths = MATH;
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
}
