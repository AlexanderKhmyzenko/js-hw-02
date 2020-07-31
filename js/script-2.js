const employees = 4;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`Зп работника номер ${i} - ${salary}`);
  totalSalary += salary;
}

console.log("totalSalary:", totalSalary);
