/*Soru 1*/
let firstName = "Berfin";
let lastName = "Baki";
let country = "Türkiye";
let age = 22;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/*soru2*/
console.log("10" == 10);
console.log("10" === 10);

/* soru3*/
console.log(parseInt("9,8") == 10);

/*Soru4*/
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 != 2);

console.log(false == true);
console.log(NaN == NaN);
console.log(3 < 2);

/* soru5 */
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

console.log("python".length > "jargon".length);

/*soru6*/

console.log(4 > 3 && 10 < 12); //True
console.log(4 > 3 && 10 > 12); //False
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //True
console.log(!(4 > 3)); //False
console.log(!(4 < 3)); //True
console.log(!false); //True
console.log(!(4 > 3 && 10 < 12)); //False
console.log(!(4 > 3 && 10 > 12)); //True
console.log(!(4 === "4")); //True

/*Egzersiz Seviye-2*/

/* soru-1 */

/*Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını 
hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100*/

// let taban = prompt("Taban", "Lütfen bir sayı giriniz.");
// let yukseklik = prompt("Yükseklik", "Lütfen bir sayı giriniz.");

// let alan = 0.5 * taban * yukseklik;
// console.log(alan);

/* soru-2 */

/*Kullanıcıdan üçgenin a kenarını, b kenarını ve c 
kenarını girmesini ve üçgenin çevresini hesaplamasını 
isteyen bir komut dosyası yazın (çevre = a + b + c)
*/

// let kenarA = prompt("A Kenarı");
// let kenarB = prompt("B Kenarı");
// let kenarC = prompt("C Kenarı");

// let cevre = parseInt(kenarA) + parseInt(kenarB) + parseInt(kenarC);
// console.log(`Üçgenin çevresi ${cevre} cm'dir`);

/* Soru-3 */
/*Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın
(alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik)) */

// let uzunluk = prompt("Uzunluk");
// let genislik = prompt("Genişlik");
// let alan = uzunluk * genislik;
// let cevre = (parseInt(uzunluk) + parseInt(genislik)) * 2;
// console.log(alan);
// console.log(cevre);

/* Soru-4 */
/*Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) 
ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14. */

let PI = 3.14;

let r = prompt("Yarıçap", "Lütfen yarıçağı giriniz.");
let alan = PI * r * r;
let cevre = 2 * PI * r;
console.log(alan);
console.log(cevre);
