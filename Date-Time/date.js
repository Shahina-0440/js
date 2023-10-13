var d=new Date();
var options = { timeZone: 'Asia/Kolkata', timeZoneName: 'short' };

console.log(d.toLocaleTimeString('en-US', options));

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());


console.log(d)

console.log(d.setUTCFullYear(2002,8,2));
/*console.log(d.setMonth(8));
console.log(d.setDate(2));*/

console.log(d)