//İlkel veri tipleri

let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true ( Burada iki değişkende 3 e eşit olduğu için birbirine eşit olduğu sonucu çıkıyor )

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false  ( Burada iki değişkende farklı olduğu ve eşitlenemedikleri için false yani 0 değeri dönüyor )

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); //false  ( Yukarıdaki örnek gibi eeşit olmadıkları için false yani 0 değeri dönüyor )

//İlkel olmayan veri tipleri

//Diziler
let nums = [1, 2, 3];
nums[0] = 10; //İlk değeri 10 yapar

console.log(nums);

/*
NOT!:İlkel olmayan veri türleri aynı özelliklere ve değerlere sahip olsa bile, kesinlikle eşit değildirler.
*/

// let key = [1, 2, 3];
// let anahtar = [1, 2, 3];

// console.log(key == anahtar); //false

// let userOne = { name: "Asabeneh", role: "teaching", country: "Finland" };

// let userTwo = { name: "Asabeneh", role: "teaching", country: "Finland" };

// console.log(userOne == userTwo); // false

let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers); // true ( değişken oluştururken numbers'ın değerini nums'a eşitlediği için bunun sonucu true dönmektedir.)

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = userOne;

console.log(userOne == userTwo); // true ( yukarıdaki ile aynı )
