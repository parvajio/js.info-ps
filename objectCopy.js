// normal copy

const user = {
    name : "Parvaj",
    age : 22
}

const admin = {};

for(let key in user){
    admin[key] = user[key]
}

console.log(admin)
admin.name = "Mosharof";
console.log(admin)
console.log(user)

// using Object.assign()

const newUser = {};
Object.assign(newUser, user)
console.log(newUser)

//more

const moreUser = Object.assign({}, user);
console.log(moreUser)

//nested clonig 
let user1 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user1);
  
  console.log( user1.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user1.sizes.width = 60;    // change a property from one place
  console.log(clone.sizes.width); // 60, get the result from the other one

//   structuredClone

const newStrcClone = structuredClone(user1)
console.log(newStrcClone)