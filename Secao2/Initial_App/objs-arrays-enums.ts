// const person: {
//   name: string;
//   age: number;
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Paulo",
//   age: 27,
//   hobbies: ["ESports, Reading"],
//   role: [3, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = "READ",
  AUTHOR = 6,
}

const person = {
  name: "Paulo",
  age: 27,
  hobbies: ["ESports, Reading"],
  role: Role.AUTHOR,
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Programming"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("Is Author!");
}
