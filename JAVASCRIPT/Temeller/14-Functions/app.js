function merhaba(name, age) {
  if (typeof name === "undefined" && typeof age === "undefined") {
    name = "Tanımlanmamış";
    age = "Tanımlanmamış";
  }
  console.log(`Merhaba benim adım ${name} ve yasım ${age}`);
}

merhaba("Fatih", 21);

merhaba("CABBAR", 25);

merhaba();

//------------------------

function square(number) {
  return number * number;
}
function cube(number) {
  return number * number * number;
}

console.log(square(5));
console.log(cube(7));

let a = square(4);

a = cube(a);
console.log(a);

//------------------------

const database = {
  host: "localhost",
  add: function () {
    console.log("Eklendi");
  },
  get: function () {
    console.log("Alındı");
  },
  update: function (id) {
    console.log(`${id} numaralı kayıt güncellendi.`);
  },
  delete: function (id) {
    console.log(`${id} numaralı kayıt silindi.`);
  }
};

console.log(database.host);

database.add();

database.delete(10);
