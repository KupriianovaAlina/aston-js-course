if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    // Сохраняем ссылку на исходную функцию
    var fn = this;

    // Получаем аргументы, переданные в bind после "context"
    // начиная с 2-го индекса, так как первый это "context"
    var argsBind = Array.prototype.slice.call(arguments, 1);

    // Возвращаем новую функцию
    return function () {
      // Получаем аргументы, переданные когда вызывается возвращаемая функция
      var argsCall = Array.prototype.slice.call(arguments);

      // Вызываем исходную функцию в контексте "context"
      // и с новым массивом аргументов, объединяющим начальные аргументы bind и текущие аргументы call
      return fn.apply(context, argsBind.concat(argsCall));
    };
  };
}

// Тестирование полифила
var obj = {
  name: 'Alex'
};

function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}

var boundGreet = greet.bind(obj, 'Hello');

boundGreet('!'); // Вывод: "Hello Alex!"