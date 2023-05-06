/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get clientData() {
    return {
      login: this.#login,
      email: this.#email,
    };
  }
  set clientData({ newLogin, newEmail }) {
    console.log(newLogin, newEmail);
    this.#login = newLogin;
    this.#email = newEmail;
  }
}
const vika = new Client("viktoria", "vika@MediaList.com");
console.log(vika);
vika.clientData = { newLogin: "viktorii", newEmail: "nevika@mgmail.com" };
console.log(vika.clientData);
