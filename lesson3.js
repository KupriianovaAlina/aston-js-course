import _ from 'lodash';

// Базовое
// Задание 1 – Создать объект counter всеми возможными способами;

let counter1 = {};
const counter2 = new Object();
const counter3 = Object.create({});
const counter4 = Object.assign({}, {});

function Obj() { };
const counter5 = new Obj();

// задача 2 - Скопировать объект counter всеми возможными способами
counter1 = { firstName: 'Roman', secondName: 'Alexanov' };

const newCounter1 = _.cloneDeep(counter);
const newCounter2 = Object.assign({}, counter);
const newCounter3 = { ...counter };
const newCounter4 = Object.assign({}, counter);
const newCounter5 = { ...counter };

const jsonCounter = JSON.stringify(counter);
const newCounter6 = JSON.parse(jsonCounter);

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
const makeCounter1 = function () {
  let count = 0;
  return function () {
    return count++;
  };
};


function makeCounter2() {
  let count = 0;
  return function () {
    return count++;
  };
};


const makeCounter3 = () => {
  let count = 0;
  return () => count++;
};

function MakeCounter4() {
  let count = 0;
  this.increment = function () {
    return count++;
  };
}

const makeCounter5 = new Function('let count = 0; return function () {return count++;}');

// Продвинутое 
// Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов
function reverseStr(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr("hello")); // olleh

// Задание 2 – Написать функцию глубокого сравнения двух объектов
function deepEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;
  if (obj1Keys.length === 0 && obj2Keys.length === 0) return true;

  for (let key of obj1Keys) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      return deepEqual(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  };

  return true;
}

const obj1 = { here: { is: "on", other: "3" }, object: 'Z' };
const obj2 = { here: { is: "on", other: "2" }, object: 'Z' };
console.log(deepEqual(obj1, obj2))

const obj3 = {};
const obj4 = {};
console.log(deepEqual(obj3, obj4))

const obj5 = { here: { is: "on", other: "3" }, object: 'Z' };
const obj6 = { here: { is: "on", other: "3" }, object: 'Z' };
console.log(deepEqual(obj5, obj6));