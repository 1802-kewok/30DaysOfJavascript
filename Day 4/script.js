/*Egzersiz Seviye 1*/

/* Soru 1 */
/*prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse,
 geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi
  gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.
 */

// let age = prompt("Yaşınızı girin:");
// if (age < 18) {
//   let fark = 18 - age;
//   console.log(`18 yaşına girmenize daha ${fark} yıl var.`);
// } else if (age >= 18) {
//   console.log("Araç sürecek kadar yaşlısınız");
// }

/* Soru 2 */

/**if… else kullanarak myAge ve yourAge değerlerini karşılaştırın.
 *  Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin.
 * Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın. */

// let myAge = 22;
// let yourAge = prompt("Yaşınız:");

// if (myAge > yourAge) {
//   let kalan = parseInt(myAge) - parseInt(yourAge);
//   console.log(`Ben senden ${kalan} yaş büyüğüm`);
// } else if (yourAge > myAge) {
//   let kalan = parseInt(yourAge) - parseInt(myAge);
//   console.log(`Sen benden ${kalan} yaş büyüksün`);
// } else {
//   console.log(`Aynı yaştayız.`);
// }

/** Soru 3 */
/**a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür.
 *  şekilde uygulamaya çalışın */

// let a = 4;
// let b = 3;

// if (a > b) {
//   console.log(" a b'den büyüktür.");
// } else if (a < b) {
//   console.log("a b'den küçüktür.");
// } else {
//   console.log("a eşittir b'ye");
// }

/** Soru 3 */
/**Çift sayılar 2'ye tam bölünür kalan sıfırdır.
 * Bir sayının çift olup olmadığını veya JavaScript
 * kullanıp kullanmadığını nasıl kontrol edersiniz? */

// let sayi = prompt("Bir Sayı Giriniz:");
// if (sayi % 2 == 0) {
//   console.log(`${sayi} bir çift sayıdır.`);
// } else {
//   console.log(`${sayi} bir tek sayıdır.`);
// }

/**Egzersiz Seviye 2 */

/** Soru 1 */
/**Öğrencilere puanlarına göre puan verebilecek bir kod yazın:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let puan = prompt("Not:");
if (80 <= puan && puan <= 100) {
  console.log("A");
} else if (70 <= puan && puan <= 79) {
  console.log("B");
} else if (60 <= puan && puan <= 69) {
  console.log("C");
} else if (50 <= puan && puan <= 59) {
  console.log("D");
} else if (0 <= puan && puan <= 49) {
  console.log("F");
} else {
  console.log("Bir sayı giriniz.");
}

/** Soru 2 */
/**Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. */
let monthUserInput = prompt("Hangi aydasınız:");
let month = monthUserInput.toLowerCase();
switch (month) {
  case "ocak":
    console.log("Kış mevsimindesiniz.");
    break;
  case "şubat":
    console.log("Kış mevsimindesiniz.");
    break;
  case "mart":
    console.log("İlkbahar mevsimindesiniz.");
    break;
  case "nisan":
    console.log("İlkbahar mevsimindesiniz.");
    break;
  case "Mayıs":
    console.log("İlkbahar mevsimindesiniz.");
    break;
  case "haziran":
    console.log("yaz mevsimindesiniz.");
    break;
  case "temmuz":
    console.log("Yaz mevsimindesiniz.");
    break;
  case "ağustos":
    console.log("yaz mevsimindesiniz.");
    break;
  case "eylül":
    console.log("sonbahar mevsimindesiniz.");
    break;
  case "ekim":
    console.log("Sonbahar mevsimindesiniz.");
    break;
  case "kasım":
    console.log("Sonbahar mevsimindesiniz.");
    break;
  case "aralık":
    console.log("Kış mevsimindesiniz.");
    break;
  default:
    console.log("Bir ay Giriniz.");
    break;
}

/** soru 3 */
/*Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır. */

var tarih = new Date();
var gun = tarih.getDay();
switch (gun) {
  case 0:
    alert("pazar");
    break;
  case 1:
    alert("pazartesi");
    break;
  case 2:
    alert("salı");
    break;
  case 3:
    alert("çarşamba");
    break;
  case 4:
    alert("perşembe");
    break;
  case 5:
    alert("cuma");
    break;
  case 6:
    alert("cumartesi");
}

/**Egzersiz Seviye 3 */
/**Soru 1 */
/* Bir aydaki gün sayısını söyleyen bir program yazın.*/
const currentDate = new Date();
const currentMonth = currentDate.getMonth();

let daysInMonth;

if (currentMonth === 1) {
  // Şubat ayını kontrol et
  const currentYear = currentDate.getFullYear();
  daysInMonth =
    (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
    currentYear % 400 === 0
      ? 29
      : 28;
} else if (
  currentMonth === 3 ||
  currentMonth === 5 ||
  currentMonth === 8 ||
  currentMonth === 10
) {
  daysInMonth = 30;
} else {
  daysInMonth = 31;
}

console.log(`Bu ay ${daysInMonth} gün içeriyor.`);
