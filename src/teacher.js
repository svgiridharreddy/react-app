import { Person } from './person';
export class Teacher extends Person {
  constructor(name,degree){
    super(name);
    this.degree = degree
  }

  Teacher(){
    console.log("techer can teach")
  }
}
