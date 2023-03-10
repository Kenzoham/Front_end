// Membuat object: {}
const user = {
    name: "Ilham",
    age: 20,
    major: "informatics"
};

// console.log(user.name);
// console.log(user["age"]);

// looping object: for-in

for (const key in user) {
    console.log(user[key]);
}