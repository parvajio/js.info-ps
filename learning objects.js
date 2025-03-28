//1111111111
//Property existence test, “in” operator

const user = {
  name: "Parvaj Mosharof",
  age: 21,
  test: undefined,
};

console.log("name" in user);
console.log("position" in user);

// another way (using undefined)

if (user.position === undefined) {
  console.log(false);
}

// porblem with undefined is :

console.log(user.test !== undefined);
console.log("test" in user);

//2222222222

//for...in

for(let key in user){
    console.log(key)
    console.log(user[key])
    console.log(user.key) //it don't work
}