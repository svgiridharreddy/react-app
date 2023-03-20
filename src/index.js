import { Teacher } from './teacher'

const teacher = new Teacher("giridhar","Msc")

teacher.teach()

// const person = {
//   name: 'giridhar',
//   walk() {
//     console.log(this)
//   }
// }

// person.walk()

// const walk = person.walk.bind(person)
// walk()

// const jobs = [
//   {id: 1, isActive: true},
//   {id: 2, isActive: true},
//   {id: 3, isActive: false},
// ]

// const activeJobs = jobs.filter(job => job.isActive)
// console.log(activeJobs);

// const person1 = {
//   walk(){
//     setTimeout(() => {
//       console.log("this",this) 
//     }, 1000);
//   }
// }

// person1.walk()