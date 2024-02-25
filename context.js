const obj = { item: 'some value' };

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

// Использование метода bind для привязки this под объект obj к функции logger
const boundLogger = logger.bind(obj);
boundLogger();

// Использование метода call для вызова функции logger с привязкой this к объекту obj
logger.call(obj);

// Использование метода apply для вызова функции logger с привязкой this к объекту obj
logger.apply(obj);