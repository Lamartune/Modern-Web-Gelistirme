let value;

//Veri Tiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);

value = (10).toString();
value = (3.14).toString();



//Veri Tiplerini Sayılara Çevirme

value = Number("1,2,3")
value = Number(null);
value = Number(undefined);
value = Number("Hello World");
value = Number(function(){console.log('', )})
value = Number([1,2,3,4])

value = Number("3.14")
value = parseFloat("3.14")

value = parseInt("3.14")

const a = "Hello" + 34;
console.log(a)
console.log(typeof a);

const b = Number("34") + 34;
console.log(b)
console.log(typeof b);


console.log(value)
console.log(typeof value)