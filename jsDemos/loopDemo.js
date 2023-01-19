function sayiUret(ustLimit = 49) {
  return Math.ceil(Math.random() * ustLimit);
}

for (var i = 1; i <= 6; i++) {
    console.log(i +".KOLON")
  for (var j = 1; j <= 6; j++) {
    console.log(sayiUret());
  }
}
