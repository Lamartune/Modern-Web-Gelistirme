let value;

const numbers = [43, 44, 31, 20, 55, 78, 5];

const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);

const langs = ["Java", "Python", "C#", "Html"];

const a = ["Merhaba", null, 32, undefined, 3.14];

//Uzunluk
value = numbers.length;
console.log(value);

//İndekslenme
value = numbers[0];
console.log(value);

value = numbers[2];
console.log(value);

value = numbers[numbers.length - 1]; //Arrayin son elemanını almaya yarar.
console.log(value);

// Herhangi bir İndeksteki değeri değiştirme
numbers[2] = 1000;

value = numbers;
console.log(value);

//Index Of
value = numbers.indexOf(1000);
console.log(value);

//Arrayin sonuna değer ekleme
numbers.push(58);

value = numbers;
console.log(value);

//Arrayin başına değer ekleme
numbers.unshift(3000);

value = numbers;
console.log(value);

//Arrayin en sonundaki elemanı atma
numbers.pop();

value = numbers;
console.log(value);

//Arrayin başındaki elemanı atma
numbers.shift();

value = numbers;
console.log(value);

//Belli bir indeksten belli bir indekse kadar atma
numbers.splice(0, 2);

value = numbers;
console.log(value);

//Arrayi tam tersine çevirme işlemi
numbers.reverse();

value = numbers;
console.log(value);

//Sort İşlemi
value = numbers.sort();
console.log(value);

//Sort işlemi ile küçükten büyüğe sıralama işlemi
value = numbers.sort(function (x, y) {
  return x - y;
});
console.log(value);

//Sort işlemi ile büyükten küçüğer sıralama işlemi
value = numbers.sort(function (x, y) {
  return y - x;
});
console.log(value);

//MOZİLLA JAVASCRİPTTE DÖKÜMANLAR MEVCUT
