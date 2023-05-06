// /**
// *? Напиши функцію конструктор User для 
// *? створення користувача з такими властивостями:
// *? a. userName - ім'я, рядок
// *? b. age - вік, число
// *? c. numbersOfPost - кількість постів, число
// *? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

// *? Додай метод getInfo(), який повертає рядок:
// *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`

const User = function({userName, age, numbersOfPost}){
   
   this.username = userName;
   this.age = age;
   this.numbersOfPost = numbersOfPost;

   this.getInfo= function () {
    const {username, age, numbersOfPost} = this
    return `Користувачеві ${username} ${age} років і в нього ${numbersOfPost} публікацій.`
   }

}
const vika = new User(
    {
    userName:'Vika', 
    age: 38, 
    numbersOfPost: 5
    } )
    console.log(vika);
    const egor = new User(
        {
            userName:'Egor', 
            age: 28, 
            numbersOfPost: 1   
        }
    )
    console.log(egor);