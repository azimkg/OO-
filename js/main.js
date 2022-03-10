// ! Class work
// Классная работа. ООП. Инкапсуляция. Полиморфизм. Наследование ES6 (классы)
// Задание №1

// Реализуйте класс Student (Студент), который будет наследоваться от класса User.
// Этот класс должен иметь следующие свойства:
// ● name (имя, наследуется от User),
// ● surname (фамилия, наследуется от User),
// ● birthday (год рождения, наследуется от User),
// ● isAdult (совершеннолетний, по умолчанию undefined).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getAge(), который будет выводить возраст
// студента. Возраст вычисляется так: от текущего года отнять год рождения.
//  	И в случае, если студент совершеннолетний менять поле isAdult на true (в противном
// случае false)

class User {
  constructor(name, surname, birthday, isAdult) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.isAdult = undefined;
  }
  getFullName() {
    console.log(`My name is ${this.name} ${this.surname}`);
  }
  getAge() {
    let age = new Date().getFullYear() - this.birthday;
    console.log(age);
    this.isAdult = age >= 18 ? true : false;
  }
}
class Student extends User {
  constructor(name, surname, birthday, isAdult) {
    super(name, surname, birthday, isAdult);
  }
}

let student = new Student("Azim", "Zheldenbaev", 2000);
console.log(student);
student.getFullName();
student.getAge();
console.log(student);
