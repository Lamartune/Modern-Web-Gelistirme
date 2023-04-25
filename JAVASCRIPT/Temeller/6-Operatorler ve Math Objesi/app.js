let value;


const value1 = 10;
const value2 = 4;

// Aritmetik Operatörler

// value = value1+value2;
// value = value1-value2;
// value = value1*value2;
// value = value1/value2;
// value = value1%value2;

value = Math.PI;
value = Math.E;;

 //yuvarlama işlemi
value = Math.round(3.6);
value = Math.round(3.5);
value = Math.round(3.4);

 //yukarı yuvarlama işlemi
value = Math.ceil(3.7);
value = Math.ceil(3.2);

 //yukarı yuvarlama işlemi
value = Math.floor(3.7);
value = Math.floor(3.2);

 //karekök alma işlemi
value = Math.sqrt(16);
value = Math.sqrt(31);

 //mutlak değer işlemi
value = Math.abs(-10);

 //üssü işlemi
value = Math.pow(8,3);
value = Math.pow(4,2);

 //max işlemi
value = Math.max(10,-1,100,32);

 //min işlemi
value = Math.min(10,-1,100,32);

 //rastgele sayı üretme işlemi (0-1 arasında ondalıklı değer üretir. 0 dahil 1 dahil değil.)
value = Math.random();

 //rastgele sayı üretme işlemi (0 dahil 20 dahil değil)
value = Math.random() * 20;
 
 //rastgele sayı üretme işlemi (1 - 21 arası değerler, aşağı yuvarladığımızdan dolayı 1-20 oluyor)
value = Math.floor(Math.random() * 20 + 1);





console.log(value)

console.log(typeof value)