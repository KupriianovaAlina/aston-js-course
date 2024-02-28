// ООП на классах ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
  }
  logInfo() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
  }
}

class AnotherPerson extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

const person = new Person('Алексей', 30);
person.greet();

const anotherPerson = new AnotherPerson('Мария', 25);
anotherPerson.greet();
anotherPerson.logInfo();

// ООП в прототипном стиле
function Person1(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
  };
}

Person.prototype.logInfo = function () {
  console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
};


function AnotherPerson1(name, age) {
  Person1.call(this, name, age);
}

AnotherPerson1.prototype = Object.create(Person.prototype);
AnotherPerson1.prototype.constructor = AnotherPerson1;

const person1 = new Person1('Вася', 31);
person1.greet();

const anotherPerson1 = new AnotherPerson1('Лена', 15);
anotherPerson1.greet();
anotherPerson1.logInfo();

// Определение класса SuperPerson с геттером и сеттером 
class SuperPerson {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  greet() {
    console.log(`Привет, меня зовут ${this._name}`);
  }
}

class SpecialPerson extends SuperPerson {
  constructor(name) {
    super(name);
  }
}

const superPerson = new SuperPerson('Вася');
superPerson.name = 'НеВася';
console.log(superPerson.name);
superPerson.greet();

const specialPerson = new SpecialPerson('Коля');
console.log(specialPerson.name);
specialPerson.greet();

// Написать функцию function firstSum = (arr, total) => {//Решение}, которая вернет массив с первой парой чисел, сумма которых равна total
function firstSum(arr, total) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
const result = firstSum(arr, total); // result = [4, 9]
console.log(result); 