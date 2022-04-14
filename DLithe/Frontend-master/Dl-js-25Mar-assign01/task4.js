
//task 2
let salaries = {
  John: 1500,
  Pete: 2000,
  Vignesh: 4500,
  Amy: 5000,
};
let sum = 0;
for (let sal in salaries) {
  sum += salaries[sal];
}
console.log("sum of salary is:" + sum);
