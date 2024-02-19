function getLength(item) {
  // строка или массив
  if (typeof item === "string" || Array.isArray(item)) {
    console.log(item.length);
    return;
  }
  // null
  if (item === null) {
    console.log(0);
    return;
  }
  // объект
  if (typeof item === "object") {
    // set, map
    if (item instanceof Set || item instanceof Map) {
      console.log(item.size);
      return;
    }
    // псевдомассив
    if (typeof item.length === 'number' && Number(item.length) >= 0) {
      console.log(Array.from(item).length);
      return;
    }
    console.log(Object.keys(item).length);
    return;
  }
  // Любые другие типы
  console.log(0);
}

// строка, длина 13
getLength("Hello, world!");
// массив, длина 4
getLength([1, 2, 3, 4]);
// объект, длина 2
getLength({ name: "Name", surname: "Smith" });
// set, длина 5
getLength(new Set([1, 2, 3, 3, 4, 5]))
// map, длина 3
getLength(new Map([["огурец", 500], ["помидор", 350], ["лук", 50]]));
// псевдомассив, длина 3
getLength({ 0: 1, 1: 2, 2: 3, length: 3 });
// number, длина 0
getLength(12345);
// boolean, длина 0
getLength(true);
// undefinded, длина 0
getLength(undefined);
// nul, длина 0
getLength(null);
// NaN, длина 0
getLength(NaN);
// function, длина 0
getLength(() => { console.log('я функция') });
// date, длина 0
getLength(new Date());
// infinity, длина 0
getLength(Infinity);