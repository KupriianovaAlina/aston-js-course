// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды

const printArray = (arr) => {

  let i = 0;

  const printElement = (index) => {

    setTimeout((index) => {
      console.log(index);
      if (arr[index + 1]) { printElement(++index) };
    }, 3000, index);
  }

  printElement(i);
};

printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);