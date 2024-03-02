//Задача 1
console.log('1');
setTimeout(() => console.log('2'), 1);
let promiseNew = new Promise((resolve) => {
  console.log('3');
  resolve();
});
promiseNew.then(() => console.log('4'));
setTimeout(() => console.log('5'));
console.log('6');

// Ответ: 136452
// Сначала выполнится весь синхронный код (простые console.log + console.log внутри создания promiseNew)
// Потом выполнится микротаска resolve от promiseNew
// Потом выведутся таймеры, но в обратном порядке, так как у них разное время исполнения

//Задача 2
let promiseTree = new Promise((resolve, reject) => {
  resolve("a");
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  console.log("3");
});

// Ответ: 132
// Сначала выполнится весь синхронный код (простые console.log)
// Потом выполнится микротаска resolve, но "а" она никуда не передаст
// Потом сработает setTimeout

//Задача 3
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo.then((res) => {
  return res + "b";
})
  .then((res) => {
    return res + "с";
  })
  .finally((res) => {
    return res + "!!!!!!!";
  })
  .catch((res) => {
    return res + "d";
  })
  .then((res) => {
    console.log(res);
  });

// Ответ: abc
// finally ничего не принимает и ничего не отдает, catch ловил ошибки и здесь вообще бесполезен
// Все остальное отработает и склеится

// Задача 4
function doSmth() {
  return Promise.resolve("123");
}
doSmth()
  .then(function (a) {
    console.log("1", a);
    return a;
  })
  .then(function (b) {
    console.log("2", b);
    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err);
  })
  .then(function (c) {
    console.log("4", c);
    return c;
  });
// Ответ: 1 123 2 123 3 321 4 undefined
// В первых двух случаях пробрасывается успешный результат 123
// Во втором then возвращается Promise.reject("321") и его отлавливает первый catch
// В последнем then выводится 4 undefined, так как предыдущий отработавший catch ничего нам не передал

// Задача 5
console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Ответ: 1432
// Сначала синхронный код, потом микротаски (промисы), потом макротаска (таймер)