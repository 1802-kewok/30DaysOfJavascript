/*boş dizi oluşturma*/
const arr = [];
console.log(arr);

/**Değerlere sahip bir dizi oluşturma */

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // sayı dizisi

const fruits = ["banana", "orange", "mango", "lemon"]; // string dizisi, meyveler

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // string dizisi, sebzeler

const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // string dizisi, ürünler

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // string dizisi, web teknolojileri

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // string dizisi, ülkeler

// Diziyi ve dizinin uzunluğunu yazdırmak

console.log("Numbers:", numbers);

console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);

console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);

console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);

console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);

console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);

console.log("Number of countries:", countries.length);

const dizi = [
  "Asabeneh",

  250,

  true,

  { country: "Finland", city: "Helsinki" },

  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
];
// dizi farklı veri tipleri içerir.

console.log(dizi);

/** Split kullanarak dizi oluşturma */
let js = "Javascript";
const deger = js.split("");
console.log(deger);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

const companies = companiesString.split(",");

console.log(companies);

/** İndex kullanark dizi elemanlarına ulaşma */

const fruit = ["banana", "orange", "mango", "lemon"];

let firstFruit = fruits[0]; // 1. eleman'a o elemanın indexini kullanarak erişiyoruz.

console.log(firstFruit); // banana

secondFruit = fruits[1];

console.log(secondFruit); // orange

let lastFruit = fruits[3];

console.log(lastFruit); // lemon

// Son eleman devam eden örnekteki gibi hesaplanabilir

let lastIndex = fruits.length - 1;

lastFruit = fruits[lastIndex];

console.log(lastFruit); // lemon

/** dizi elemanlarını düzenlemek */
const number = [0, 1, 3, 4, 5, 6];
number[0] = 10;
number[1] = 20;
console.log(number);

/** Dizi Constructor
 *
 * Array:Bir dizi oluşturmak için kullanılır.
 * 
 * fill: Bütün dizi elemanlarını statik değerle doldurur.
 * 
 *concat: İki diziyi birbiri ile birleştirir.**concat sadece iki diziyi birleştirmez. ikiden fazla sayıda diziyi birleştirmenize izin verir.

 *Length:Dizi uzunluğunu bildirir.

 *indexOf: O elemanın dizide olup olmadığını kontrol eder.Eğer o eleman dizide mevcutsa index numarasını, mevcut değilse -1 döner.

 *lastIndexOf: Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.

 *includes:Bir dizide bir öğenin olup olmadığını kontrol etmek için kullanılır.Mevcut ise, true değerini döndürür,
  aksi takdirde false değerini döndürür.

 *Array.isArray: Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.

 *toString:Diziyi string bir ifadeye çevirir.

 *join: Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir 
 ve bir dizi olarak döndürülür.Varsayılan olarak bir virgül ile birleşir, ancak elemanlar arasında birleştirilebilecek 
 farklı dizi parametreleri iletebiliriz.

 *Slice: Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.
  
 *Splice: üç parametre alır :başlangıç konumu, kaldırılması gereken eleman sayısı ve eklenmesi gereken eleman sayısı.
 
 *Push: Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.
 
 *pop: Dizinin sonundaki elemanı siler.

 *shift: Dizinin en başındaki elemanı siler.

 *unshift: Dizinin başına dizi elemanı ekler.

 *reverse: Dizi sıralamasını terse çevirir.

 *sort: Dizi elemanlarını alfabetik sırada düzenleyin.Sort call back fonksyonu alır, 
 sort'un call back fonksiyonu ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.

  
 */

const dizioluşturma = Array(); // Boş bir dizi yaratır

console.log(dizioluşturma);

const eightXvalues = Array(8).fill("X"); // 'X'değerine sahip 8 tane eleman oluşuturur.

console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // '0' değerine sahip 8 tane eleman oluşturur.

console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4); //'4' değerine sahip 8 tane eleman oluşturur.

console.log(four4values); // [4, 4, 4, 4]

/**------------------------------------------- */

const firstList = [1, 2, 3];

const secondList = [4, 5, 6];

const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

/**-------indexOf---------- */

// dizide bir banana olup olmadığını kontrol edelim

const meyveler = ["banana", "orange", "mango", "lemon"];

let index = meyveler.indexOf("banana"); // 0

if (index === -1) {
  console.log("Bu meyve bulunmamakta");
} else {
  console.log("Bu meyve bulunmakta");
}

// Burada ayrıca kısa if kullanabilirz.

index === -1
  ? console.log("Bu meyve bulunmamakta")
  : console.log("Bu meyve bulunmakta");

// dizide bir avocado olup olmadığını kontrol edelim

let indexOfAvocado = meyveler.indexOf("avocado"); // -1, eğer eleman dizide yoksa -1 döner

if (indexOfAvocado === -1) {
  console.log("Bu meyve bulunmamakta");
} else {
  console.log("Bu meyve bulunmakta");
}

/**--------lastİndexOf-------- */

const sayilar = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(sayilar.lastIndexOf(2)); // 7

console.log(sayilar.lastIndexOf(0)); // -1

console.log(sayilar.lastIndexOf(1)); // 6

console.log(sayilar.lastIndexOf(4)); // 3

console.log(sayilar.lastIndexOf(6)); // -1

/**---------İncludes---------- */

const Berfin = ["B", "E", "R", "F", "İ", "N"];

console.log(Berfin.includes("B")); // true

console.log(Berfin.includes(0)); // false

console.log(Berfin.includes("R")); // true

console.log(Berfin.includes("ş")); // false

const yazilim = [
  "HTML",

  "CSS",

  "JavaScript",

  "React",

  "Redux",

  "Node",

  "MongoDB",
]; // Web teknolojileri dizisi

console.log(yazilim.includes("Node")); // true

console.log(yazilim.includes("C")); // false

//Diziyi kontrol etmek

/*-----------Array.İsArray-------- */
const hello = ["h", "e", "l", "l", "o"];
console.log(Array.isArray(hello));

/*-----------toString()-------- */

const sayi = [1, 2, 3, 4, 5];

console.log(sayi.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

/*-----------Join()-------- */

const isimler = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(isimler.join()); // Asabeneh,Mathias,Elias,Brook

console.log(isimler.join("")); //AsabenehMathiasEliasBrook

console.log(isimler.join(" ")); //Asabeneh Mathias Elias Brook

console.log(isimler.join(", ")); //Asabeneh, Mathias, Elias, Brook

console.log(isimler.join(" # ")); //Asabeneh # Mathias # Elias # Brook

/*-----------Slice()-------- */

const sayı = [1, 2, 3, 4, 5];

console.log(sayı.slice()); // -> Bütün öğeyi kopyalar

console.log(sayı.slice(0)); // -> Bütün öğeyi kopyalar

console.log(sayı.slice(0, numbers.length)); // Bütün öğeyi kopyalar

console.log(sayı.slice(1, 4)); // -> [2,3,4] // son elemanı dahil etmez

/*-----------Splice()-------- */

const spliceMethod = [1, 2, 3, 4, 5, 6];

spliceMethod.splice(3, 3, 7, 8, 9);

console.log(spliceMethod); // -> [1, 2, 3, 7, 8, 9] //2 eleman kaldırdı ve yerine 3 eleman ekledi

/*-----------push()-------- */

const pushmethod = ["item1", "item2", "item3"];

pushmethod.push("new item");

console.log(pushmethod); // ['item1', 'item2','item3','new item']

/*-----------pop()-------- */

const popMethod = [1, 2, 3, 4, 5];

popMethod.pop(); // -> Sondaki elemanı siler

console.log(popMethod); // -> [1,2,3,4]

/*-----------shift()-------- */

const shiftMethod = [1, 2, 3, 4, 5];

shiftMethod.shift(); // -> baştan bir elemanı kaldırır.

console.log(shiftMethod); // -> [2,3,4,5]

/*-----------unShift()-------- */

const unShiftMethod = [1, 2, 3, 4, 5];

unShiftMethod.unshift(0); // -> en başa eleman ekler

console.log(unShiftMethod); // -> [0,1,2,3,4,5]

/*-----------reverse()-------- */

const reverseMethod = [1, 2, 3, 4, 5];

reverseMethod.reverse(); // -> ters dizi sırası

console.log(reverseMethod); // [5, 4, 3, 2, 1]

reverseMethod.reverse();

console.log(reverseMethod); // [1, 2, 3, 4, 5]

/*-----------reverse()-------- */

const sortMethod = [
  "HTML",

  "CSS",

  "JavaScript",

  "React",

  "Redux",

  "Node",

  "MongoDB",
];

sortMethod.sort();

console.log(sortMethod); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

sortMethod.reverse(); // sortladıktan sonra reverse edebiliriz.

console.log(sortMethod); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

/** 
 * Dizi içinde diziler
Diziler farklı veri tiplerinde elemanları ve yeni bir dizi de 
depolayabilirler Şimdi dizi içinde bir dizi tanımlayalım.
 */

const firstNums = [1, 2, 3];

const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];

console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = [frontEnd, backEnd];

console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]

console.log(fullStack.length); // 2

console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]

console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
