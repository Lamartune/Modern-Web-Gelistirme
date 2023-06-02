let value;

const programmer = {
  name: "Fatih Tün",
  age: 22,
  email: "tunbusiness1@gmail.com",
  langs: ["Html, Css, Js"],

  adress: {
    city: "Ankara",
    street: "Bahçelievler",
  },

  work: function () {
    console.log("Programcı Çalışıyor...");
  },
};

//Tüm Programmer bilgilerini alma
value = programmer;
console.log(value);

//Spesifik Programmer bilgisini alma
value = programmer.email;
console.log(value);
//veya
value = programmer["email"];
console.log(value);

value = programmer.langs;
console.log(value);

value = programmer.adress;
console.log(value);

value = programmer.adress.city;
console.log(value);

value = programmer.adress.street;
console.log(value);

//Fonksiyonu kullanma işlemi
programmer.work();

const programmers = [
  { name: "Fatih", age: 22 },
  { name: "Cabbar", age: 34 },
];

value = programmers[0];
console.log(value);

value = programmers[0].name;
console.log(value);
