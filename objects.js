let surname = 'batman'

let person = { 
    name: 'leon', 
    surname: 'cooper',
    age: 32,
    favSongs: [
        'eiffel65 - blue', 
        'metronomy - small world'
    ],
    greeting(){
        return `hello my name is ${this.surname}`
    }
}

console.log(person.greeting())



// // dot notation
// person.age = 33
// // bracket notation
// person["age"] = 33

// let alarm = 'no alarm'
// let day = 'saturday'

// let clock = {
//     weekdayAlarm: 'alarm needed',
//     weekendAlarm: 'no alarm needed'
// }
//                 // logical operator || &&
// if(day === 'saturday' || day === 'sunday'){
//     alarm = clock.weekendAlarm
// } else {
//     alarm = clock.weekdayAlarm
// }
// console.log(alarm)

