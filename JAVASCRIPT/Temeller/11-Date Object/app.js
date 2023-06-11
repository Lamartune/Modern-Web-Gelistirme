let value;

const now = new Date(); //Şu anki zamanı getirir.
console.log(now);

const date1 = new Date("2002-07-19T17:30:00");
console.log(date1);

const date2 = new Date("July 19 2002");
console.log(date2);

const date3 = new Date("7/19/2002");
console.log(date3);

const date4 = new Date(2002, 6, 19, 17, 30, 0);
console.log(date4);

value = date1.getMonth();
console.log(value);

value = date1.getDate();
console.log(value);

value = date1.getDay();
console.log(value);

value = date1.getHours();
console.log(value);

value = date1.getMinutes();
console.log(value);

value = date1.getSeconds();
console.log(value);

value = date1.getMilliseconds();
console.log(value);

date1.setMonth(9);
date1.setDate(12);
date1.setFullYear(1999);
date1.setHours(22);
date1.setMinutes(15);
date1.setSeconds(33);

value = date1;
console.log(date1);
