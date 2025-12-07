/* const fruits = ["Apple", "Banana", "Mango"];

const [f1, f2, f3] = fruits;

console.log(f1); // Apple
console.log(f2); // Banana
console.log(f3); // Mango */
/* const student = {
    name: "Sandhya",
    age: 20,
    grade: "A"
};

const { name, age, grade } = student;

console.log(name); // Sandhya
console.log(age); // 20
console.log(grade); // Aconst values = [1, 2, 3, 4, 5]; */
/* const values = [1, 2, 3, 4, 5];
const [first, second, ...others] = values;
console.log(first); // 1
console.log(second); // 2
console.log(others); // [3, 4, 5] */

const [a, b, ...rest] = numbers;
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]