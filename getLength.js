function getLength(item) {
  // строка или массив
  if (typeof item === "string" || Array.isArray(item)) {
    console.log(item.length);
    return;
  }
  // число
  if (typeof item === "number") {
    console.log(String(item).length);
    return;
  }
  // null
  if (item === null) {
    console.log(0);
    return;
  }
  // объект
  if (typeof item === "object") {
    console.log(Object.keys(item).length);
    return;
  }
  // Любые другие типы
  console.log(0);
}

getLength("Hello, world!"); // Длина строки: 13
getLength(12345); // Длина числа: 5
getLength([1, 2, 3, 4]); // Длина массива: 4
getLength({ name: "Name", length: 4 }); // Количество свойств объекта: 2
getLength(true); // Длина значения: 0
getLength(undefined); // Длина значения: 0
getLength(null); // Длина значения: 0
getLength(NaN); // Длина значения: 0