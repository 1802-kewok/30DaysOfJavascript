let isLightOn = true; // ışık açık doğru
let isRaining = false; // yağıyor yanlış
let isHungry = false; // aç yanlış
let isMarried = true; // evli doğru
let truValue = 4 > 3; // true -- doğru
let falseValue = 4 < 3; // false -- yanlış
console.log(isLightOn);
console.log(isRaining);
console.log(isHungry);
console.log(isMarried);
console.log(truValue);
console.log(falseValue);

/*Doğru Değerleri (true)*/
/*Sıfır hariç tüm sayılar (pozitif ve negatif) doğrudur
Boş bir dize ('') dışında tüm dizeler doğrudur
Boole değeri doğru*/

/*Yanlış Değerleri (false)*/
/*
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
Bu doğru ve yanlış değerleri hatırlamakta fayda var. Daha sonraki bölümde, onları karar vermek için koşullarla kullanacağız.
*/

/*Tanımsız (Undefined)*/

/*Bir değişken bildirirsek ve bir değer atamazsak, değer tanımsız olacaktır. Buna ek olarak, eğer bir fonksiyon değer döndürmüyorsa tanımsız olacaktır.

let firstName
console.log(firstName) //tanımlanmamış, çünkü henüz bir değer atanmamış.
Boş (Null)
let empty = null
console.log(empty)  */

/*Karşılaştırma operatörleri*/
console.log(3 > 2); // true, çünkü 3 2 den büyüktür
console.log(3 >= 2); // true, çünkü 3 2 den büyüktür
console.log(3 < 2); // false,  çünkü 3 2 den büyüktür
console.log(2 < 3); // true, çünkü 2 3 den küçüktür
console.log(2 <= 3); // true, çünkü 2 3 den küçüktür
console.log(3 == 2); // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2); // true, çünkü 3 2 ye eşit değildir
console.log(3 == "3"); // true, sadece değeri karşılaştırıyor
console.log(3 === "3"); // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== "3"); // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3); // false, değeri karşılaştırıyor
console.log(3 !== 3); // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false); // true, eşdeğer
console.log(0 === false); // false, tam olarak aynı değil
console.log(0 == ""); // true, eşdeğer
console.log(0 == " "); // true, eşdeğer
console.log(0 === ""); // false, tam olarak aynı değil
console.log(1 == true); // true, eşdeğer
console.log(1 === true); // false, tam olarak aynı değil
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, eşit değil
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

/*Alert*/
alert("Welcome to 30DaysOfJavaScript");

/*prompt*/
let number = prompt("Enter number", "number goes here");
console.log(number);

/*Window confirm() metodu*/
const agree = confirm(
  "Are you sure you like to delete? "
); /*Genelde izinler için kullanılır*/
console.log(agree);
