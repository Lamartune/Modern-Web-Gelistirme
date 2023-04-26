let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java, Python, C++";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Mustafa Murat";

value = value + " Coşkun";

value += " Coşkun"; //Yukarıdaki kod ile aynı işlevi görür. value = value + " Coşkun"

value = firstName.length; //Stringin uzunluğunu (harf sayısını bu şekilde buluruz)

value = firstName.concat(" ", lastName, " ", "Caz"); //concat çoklu ekleme işlemi için kullanılır. (firstname 6 + " " + lastName + " "+ "Caz")

value = firstName.toLowerCase(); //Tüm karakterleri küçük karaktere dönüştürür.

value = firstName.toUpperCase(); //Tüm karakterleri büyük karaktere dönüştürür.

value = firstName[0]; //0. İndeksi alma
value = firstName[2];
value = firstName[4];

value = firstName[firstName.length - 1]; //Son elemanın indeksini uzunluktan çıkartarak alıp yazdırma işlemi

//Index Of
value = firstName.indexOf("L"); //Harfin kaçıncı indeks olduğunu bulmamızı sağlar

value = firstName.indexOf("o");

value = firstName.indexOf("l"); //İçinde arattığımız karakter yoksa sonuç -1 çıkar

//Char At
value = firstName.charAt(0); //0. elemanı alma
value = firstName.charAt(firstName.length - 1);

//Split
value = langs.split(","); //Virgüle göre parçalama işlemi

//Replace
value = langs.replace("Python", "CSS");

//Includesfalse dödürür
value = langs.includes("Java") //String içinde Java bulabilirse True bulamazsa 

console.log(value);
