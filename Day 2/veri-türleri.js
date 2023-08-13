//Typeof : Veri türlerini kobntrol etmek için kullanılır.

let sehir = "Helsinki"; // string
let yas = 250; // number,  benim gerçek yaşım değil merak etme
let meslek; // undefined, çünkü bir değer atanmamış

console.log(typeof sehir); // string
console.log(typeof "Asabeneh"); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof meslek); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/*Veri Türünü Değiştirme (Döküm)

Döküm: Bir veri tipini başka bir veri tipine dönüştürme.
Kullandıklarımız parseInt(), parseFloat(), Number(), + sign, str() Aritmetik işlemler yapmadan önce string sayıları 
önce integer yada float türüne dönüştürmeliyiz yoksa hata alırız.*/

//String to Int
/*String bir numarayı sayıya dönüştürebiliriz. Alıntı içerisindeki herhangi bir sayı string numarasıdır.
 Bir string numarası örneği: '10', '5', vb. Aşağıdaki metotları kullanarak string'i sayıya dönüştürebiliriz:


**parseInt()
**Number()
**Plus sign(+) // artı işareti demek*/

let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10
// let num = '10'
// let numInt = Number(num)

// console.log(numInt) // 10
// let num = '10'
// let numInt = +num

// console.log(numInt) // 10
// String to Float
// String içindeki ondalık numarayı sayıya çevirebiliriz. Tırnak içerisindeki ondalık sayı string ondalık sayıdır. Bir string ondalık numarası örneği: '9.81', '3.14', '1.44' vb. Aşağıdaki metotları kullanarak ondalık stringi sayıya dönüştürebiliriz:

// parseFloat()
// Number()
// Plus sign(+)
// let num = '9.81'
// let numFloat = parseFloat(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = Number(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = +num

// console.log(numFloat) // 9.81
// Float to Int
// Ondalık sayıları tam sayılara çevirebiliriz. (Int) ( bu aşağıya yuvarlıyor ) Float'ı int'e dönüştürmek için aşağıdaki metodu kullanıyoruz:

// parseInt()
// let num = 9.81
// let numInt = parseInt(num)

// console.log(numInt) // 9
