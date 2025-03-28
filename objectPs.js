//111111
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// const user = new Object();
const user = {};
user.name = "John";
user["surName"] = "Smith";

user.name = "pete"

delete user.name;

//checking 

for(let key in user){
    console.log(key)
    console.log(user[key])
}

//222222

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// !!!!!!!! this boolshit i tried
// ::::::
// const isEmptyObject = (obj) =>{
//     let keyCount = 0;
//     for (let key in obj){
//         keyCount++;
//     }
//     if (keyCount) {
//         console.log(false)
//     } else {
//         console.log(true)
//     }
// }

// now :

const isEmptyObject = (obj) =>{
    for (let key in obj) {
        console.log(false)
       return false       
    }
    console.log(true)
    return true;
}

const schedule = {}
isEmptyObject(schedule)