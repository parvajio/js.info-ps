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

