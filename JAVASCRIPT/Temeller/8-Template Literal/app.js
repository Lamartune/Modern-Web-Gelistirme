const name = "Fatih";
const department = "IT";
const salary = 4000;

console.log(name, department, salary);

// -----------------------------------------------

const a =
  "İsim: " +
  name +
  "\n" +
  "Departman: " +
  department +
  "\n" +
  "Maaş: " +
  salary;

console.log(a);

// -----------------------------------------------

const b = `İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}`;

console.log(b);

// -----------------------------------------------

function x() {
  return "Merhaba";
}
const html = `
    <ul>
      <li>${name}</li>
      <li>${department}</li>
      <li>${salary}</li>
      <li>${10 / 4}</li>
      <li>${x()}</li>
    </ul>
`;

document.body.innerHTML = html;
