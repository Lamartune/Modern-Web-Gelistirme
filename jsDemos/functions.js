var degisken = "Değer";

function sayiUret(ustLimit = 49){
    return Math.ceil(Math.random() * ustLimit)
}
//Keyword = return

console.log(degisken)

sayiUret()

var sayi1 = sayiUret(1000)
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()
var sayi6 = sayiUret()

console.log('Kolon: ', sayi1 + ' '+sayi2 + ' '+sayi3 + ' '+sayi4 + ' '+sayi5 + ' '+sayi6 + ' ')