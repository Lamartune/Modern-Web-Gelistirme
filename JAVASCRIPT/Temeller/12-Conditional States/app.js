// Karşılaştırma Operatörleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

console.log("java" == "javascript"); //FALSE

console.log(2 == 2); //TRUE
console.log(2 == "2"); //TRUE
console.log(2 === "2"); //değerler ve tipler aynı mı? FALSE

console.log(4 > 2); //TRUE
console.log(2 < 4); //TRUE

console.log(2 != 4); //TRUE
console.log(2 != 2); //FALSE

console.log(4 <= 2); //FALSE
console.log(4 >= 2); //TRUE

//---------MANTIKSAL BAAĞLAÇLAR----------
console.log("---------MANTIKSAL BAAĞLAÇLAR----------");
// NOT OPERATÖRÜ
console.log("NOT OPERATÖRÜ");
//False ise True, True ise False yapmaya yarar.

console.log(2 == 2);
console.log(!(2 == 2));
console.log(!(2 != 2));

//AND OPERATÖRÜ
console.log("AND OPERATÖRÜ");

console.log(2 == 2) && "ahmet" == "ahmet";
console.log(7 == 2) && "ahmet" == "ahmet";
