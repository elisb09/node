// const persons = [
//     { name: 'Elisei', age: 17},
//     { name: 'Aktan', age: 19},
//     { name: 'Oma', age: 16},
//     { name: 'Efa', age: 13},
//     { name: 'Negro', age: 12}
// ]

// const filterF = (person) => {
//     if (person.name == "Oma") {
//         return true
//     } else {
//         return false
//     }
// }

// const index = persons.findIndex(filterF)
// console.log(index);


const persons = [
    { name: 'Elisei', age: 17},
    { name: 'Aktan', age: 19},
    { name: 'Oma', age: 16},
    { name: 'Oma', age: 13},
    { name: 'Efa', age: 13},
    { name: 'Negro', age: 12}
]

// const filterF = 

const index = persons.findIndex((person) => person.name == "Oma" && person.age == 13) 
console.log(index);