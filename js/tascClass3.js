/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */
class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(note) {
    const index = this.items.findIndex((item) => item.text === note);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  updatePriority(text, newPriority) {}
}
const note1 = new Notes();
note1.addNote({
  text: "note1",
  priority: Notes.Priority().HIGHT,
});
note1.addNote({
  text: "note1111",
  priority: Notes.Priority().LOW,
});
console.log(note1);
note1.removeNote("note1111");
console.log(note1);
