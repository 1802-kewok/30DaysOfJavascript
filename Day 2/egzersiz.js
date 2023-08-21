let challenge = "30 Days Of Javascript";
console.log(challenge);
console.log(challenge.length);

console.log(challenge.toUpperCase());
let küçükHarf = challenge.toLowerCase();
console.log(küçükHarf);

console.log(challenge.substring(0, 2));

let ifade = "30 Days Of JavaScript";
let ayrilmisIfade = ifade.split("30 "); // "30 " ifadesini kullanarak ayırma

console.log(ayrilmisIfade[1]); // İkinci öğe, istediğiniz ayrılmış ifade olan "Days Of JavaScript" olacaktır.

console.log(challenge.includes("script"));

let yeni = challenge.split(" ");
console.log(yeni);

console.log(challenge.replace("Javascript", "Python"));

let love = "JavaScript'in 30 Günü";
console.log(love.charAt(10));

console.log(love.charCodeAt("J"));

let marka = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(marka.split(", "));

console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let cumle = " Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(cumle.indexOf("çünkü"));
console.log(cumle);
console.log(cumle.trim(" "));
