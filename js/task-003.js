//  *? Напишіть цикл, який виводить у консоль
//   *? числа від max до min за спаданням
//   *? Виведіть у консоль усіх парних чисел від min до max
// const min = 19;
// const max = 60;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// let totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// let totalPrice = deliveryFee + orderedQuantity * pricePerDroid;

// const message = `You ordered droids worth ${totalPrice} credits.  Delivery (${deliveryFee} credits) is included in total price. `;
// console.log(message);

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   console.log(`You picked ${name}, price per item is ${price} credits`);
// }
// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);

//   return totalPrice;
// }
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//     const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee)
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//     console.log(message);

//     return message;
//   }
//   makeOrderMessage(2, 100, 50)
//   makeOrderMessage(4, 300, 100)
//   makeOrderMessage(10, 70, 200)

// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику.
//  Присвой змінній passed вираз перевірки віку користувача на повноліття.
//   Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
//     const passed  = (age >=18)
//     console.log();

//     return passed;
//   }

// Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false.
//  Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів.
//  Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";

//   const isMatch = password === SAVED_PASSWORD;
//   console.log(isMatch);

//   return isMatch;
//   isValidPassword("mangodab3st");
// }
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//  Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі,
//  у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//     let message;

//   if(available>=ordered){
//     message = "Order is processed, our manager will contact you."
//   }
//     else {
//     message = "Not enough goods in stock!"
//   }

//     return message;
//   }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice < customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = "You ordered <число> droids, you have <число> credits left";
//   }
//   console.log(message);
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = 5 >= start && 5 <= end;
//   console.log(5 >= start && 5 <= end);
// }
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 5000) {
//     discount = GOLD_DISCOUNT;
//   }

//   console.log(discount);
// }

// function getSubstring(string, length) {
//   const substring = (string, length[(0, 3)]); // Change this line

//   return substring;

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // "Repa") ; // Change this line

//   return substring;
// }
// console.log(substring)

// function checkForSpam(message) {
//   let result;

//   result = message = message.toUpperCase() || message.toUpperCase();
//   result = message.includes(spam) || message.includes(sale);
// }
// console.log(checkForSpam);

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(fruits);

// const fruits = ["apple", "peach", "pear", "banana"];
// console.log(fruits);
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength.length);
// function getExtremeElements(array, erg, jt4g) {
//   getExtremeElements(getExtremeElements[(0, end)]);
//   console.log(getExtremeElements);
// }

// function calculateEngravingPrice(message, pricePerWord) {

// let word = message.split(" ").length;
// const totalprice = word * pricePerWord;
// console.log(totalprice);

// const title = "woRld Yrtt Thyty Th6h";

// const slug = title.toLowerCase().split(" ").join("-");

// console.log(slug);

//

// function findLongestWord(string = " ") {
//   const stringSplit = string.split(" ");
//   let longestWord = "";

//   for (const word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// function getCommonElements(array1, array2) {
//   let total = {};
//   for (let string of array1) {
//     if (array2.includes(string)) {
//       total.push(string);
//     }
//   }

//   return total;
// }
/**
 *? У нас есть объект, в котором хранятся зарплаты
 *? нашей команды
 *? Напишите код для суммирования всех зарплат и
 *? сохраните его результат в переменной sum.
 *? Если объект salaries пуст, то результат должен быть 0
 */

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
function calcSelaris(total) {
  let save = 0;
  let velyous = Object.values(total);
  console.log(velyous);
  for (let values of velyous) {
    save += values;
  }
  return save;
  // for (let salari in total) {
  //   save += total[salari];
  //   console.log(total[salari]);
  // }
  // return save;
}
console.log(calcSelaris(salaries));
