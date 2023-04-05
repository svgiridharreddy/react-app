export class Person {
  constructor(name){
    this.name = name
  }

  walk(){
    console.log("person can walk")
  }
}

const person = new Person("giridhar")
console.log(person)

