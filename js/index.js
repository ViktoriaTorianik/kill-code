// *? Создайте объект calculator с тремя методами
//  *? read(a, b) - принимает два аргумента и сохраняет их
//  *? как свойства объекта
//  *? sum() возвращает сумму сохраненных значений
//  *? multiply() перемножает сохраненные значения и возвращает результат
const calculator = {
  read(a, b) {
    this.arra = a;
    this.arrb = b;
  },
  sum() {
    console.log(this.arrb);
    if (!this.arra || !this.arrb) {
      return "нема значення";
    }
    return this.arra + this.arrb;
  },
  multypy() {
    if (!this.arra || !this.arrb) {
      return "нема значення";
    }
    return this.arra * this.arrb;
  },
};
// console.log(calculator);
// console.log(calculator);
// console.log(calculator.arra);
console.log(calculator.sum());
// console.log(calculator.multypy());
console.log(calculator.read(10, 20));
console.log(calculator.sum());
console.log(calculator.multypy());
