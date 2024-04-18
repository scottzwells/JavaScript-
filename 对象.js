/*const person={
    age:30,
    address:{
        street:"50 main st",
        city :"Boston",
        state:"MA"
    }
}
console.log(person)
console.log(person.address)
let {age} =person
age =10
console.log(person)*/

const todos=[
    {
        id:1,
        text:'Take out rubbish',
        isComplete:true,
    },
    {
        id:2,
        text:'Meeting with boss',
        isComplete:true,
    },
    {
        id:3,
        text:'Dentist appt',
        isComplete:false,
    }
];
const todoJSON = JSON.stringify(todos)
console.log(todosJSON)
