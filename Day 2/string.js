/* 
String Birleştirme
İki veya daha fazla string'i birbirine bağlama işlemine birleştirme denir.
*/
// let firstName = "Berfin";
// let lastName = "Baki";
// let space = " ";
// let fullName = firstName + space + lastName; // birleştirme, iki string'i bir araya getirme.
// console.log(fullName);

// Farklı veri türlerini oluşturma
// let space = " ";
// let firstName = "Asabeneh";
// let lastName = "Yetayeh";
// let country = "Finland";
// let city = "Helsinki";
// let language = "JavaScript";
// let job = "teacher";
// let age = 250;

// let fullName = firstName + space + lastName;
// let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5 toplama operatörü ile değişkenleri birleştiriyor

// console.log(personInfoOne);

/*String'lerdeki Kaçış Dizileri
JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. 

\n: yeni satır
\t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
\\: Ters eğik çizgi
\': Tek Tırnak (')
\": Çift Tırnak (")
*/

// kodları console kısmına yazarak denerseniz daha iyi anlarsınız.
console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); //  Buradakı \n satır sonu anlamına gelir sonrası aşağı iner
console.log("Days\tTopics\tExercises"); // Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir
console.log("Day 1\t3\t5"); // \t bir başka örnek
console.log("Day 2\t3\t5"); // \t bir başka örnek
console.log("Day 3\t3\t5"); // \t bir başka örnek
console.log("Day 4\t3\t5"); // \t bir başka örnek
console.log("This is a backslash  symbol (\\)"); // Ters eğik çizgi yazmak için \\ kullanılıyor
console.log('In every programming language it starts with "Hello, World!"'); // Hello World'ü çift tırnak içine almak için \" Hello World \" kullanılıyor.
console.log("In every programming language it starts with 'Hello, World!'"); // Hello World'ü tek tırnak içine almak için \' Hello World \' kullanılıyor.
console.log("The saying 'Seeing is Believing' isn't correct in 2020"); // Bu kısımdada alıntıları kullanmak için \ kullanımı gösterilmiş.

//Şablon String'ler
console.log("2 ve 3'ün toplamı 5'tir."); // statik bir veri
let a = 2;
let b = 3;
console.log(`${a} ve ${b}'ün toplamı ${a + b}'tir.`); //Verileri dinamik olarak ekleme.

// Bu kısımda yazar + kullanarak ekleme yapmanın diğer yöntemi olan ES6 ekleme yöntemini gösteriyor.
// Bu daha stabil çalışıyor.

let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age = 250;
let fullName = firstName + " " + lastName;

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - dize ekleme yöntemi ( ES5 yukarda gösterilmişti )
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);

//String metotlar

let js = "javascript";
console.log(js.length); //lenght sözcüğün karakter sayısını verir.

let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

//toUpperCase(): bu metot string verisini büyük harflere dönüştürür.
let dil = "JavaScript";

console.log(dil.toUpperCase()); // JAVASCRIPT

let ad = "Berfin";

console.log(ad.toUpperCase()); //BERFİN

let ülke = "Türkiye";

console.log(ülke.toUpperCase()); // TÜRKİYE

//toLowerCase(): bu metot string verisini küçük harflere dönüştürür.

let x = "JavasCript";

console.log(x.toLowerCase()); // javascript

//substr(): İki arrgüman alır, başlangıç indeksi ve silenecek karakter sayısı.
let isim = "Berfin";
console.log(isim.substr(3, 5));

let soyad = "baki";
console.log(soyad.substring(0, 2));

//split(): Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturuyor )
let metin = "30 Days Of JavaScript";

console.log(metin.split()); // bu kısımda birşey belirtmediğin için 1 elementli array oluştu -> ["30 Days Of JavaScript"]
console.log(metin.split(" ")); // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30", "Days", "Of", "JavaScript"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // Dikkat edin sadece virgül ile ayırıyor. İknci elementin solunda boşluk oluşuyor.  ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); // Dikkat edin burayada. ', ' virgül ve boşluk bulunmakta bu yüzden elementleri virgülden ayırıp boşluklsuz arrray oluşturuyor.  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): String'in başında ve sonundaki boşlukları silmeye yarar.
let bosluk = "   30 Days Of JavaScript   ";

console.log(bosluk);
console.log(bosluk.trim(" "));

let name = " Berfin ";

console.log(isim);
console.log(isim.trim()); // içinde tırnak kullanmasanız dahi boşlukları siler

//includes(): Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner. ( birebir arama yapar )
let metinn = "30 Days Of JavaScript";

console.log(metinn.includes("Days")); // true
console.log(metinn.includes("days")); // false - birebir arama yapar!
console.log(metinn.includes("Script")); // true
console.log(metinn.includes("script")); // false
console.log(metinn.includes("java")); // false
console.log(metinn.includes("Java")); // true

//replace(): Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.
let proje = "30 Days Of JavaScript";
console.log(proje.replace("JavaScript", "Python")); // 30 Days Of Python

//charAt(): Stringdeki indeksi belirttiğinizde o indeksin değerini yazdırır.

let indexno = "30 Days Of JavaScript";
console.log(string.charAt(0)); // 3 (0. indeksin değerini döndürdü)

let index = indexno.length - 1; // bu kısımda yukardaki değişkenin karakter sayısını alıyor (21) sonra bu sonucu 1 ile çıkartıyor sonuç 20. aşağı bak
console.log(indexno.charAt(index)); // pogramlamada sayma 0 dan başladığı için -1 yapıyor yukarıda console.log da çıkan sonuç "t" olacaktır. Buda 20. karakterdir. İnanmazsan say =) ama sıfırdan başlamayı unutma


// charCodeAt(): String'teki vermiş olduğunuz index değerinin ASCII numarasını döndürür.

string.charCodeAt(index)
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII  116

//indexOf(): Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )
string.indexOf(substring)
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1


//lastIndexOf(): Bu metot belirtilen değerin son değer indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )
//syntax
string.lastIndexOf(substring)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38


//concat(): Bu metot birleştirme işlemini sağlar, birden fazla değer alabilir
string.concat(substring, substring, substring)
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland

//startsWith: String'in belirtilen değer ile başlayıp başlamadığını kontrol eder. true yada false döndürür.
//syntax
string.startsWith(substring)
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false

//endsWith: String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.
string.endsWith(substring)
let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false

//search: Argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı olabilir.
string.search(substring)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7 buradaki gi açıklaması bir alt örnekte var

//match: Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.
let string = 'love'
let patternOne = /love/     // koşulsuz
let patternTwo = /love/gi   // g-bütün metinde ara, i - büyük küçük harf duyarsız
  

//Match syntax

// syntax
string.match(substring)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

//repeat(): bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.
string.repeat(n)
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove



