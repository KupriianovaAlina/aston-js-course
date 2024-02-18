function createNode(value, left = null, right = null) {
  return { value, left, right };
}

function compare(node1, node2) {
  if (!node1 && !node2) {
    // Оба узла пусты, все ок, структура совпадает
    return true;
  }
  if (!node1 || !node2) {
    // Один из узлов пуст, а другой нет, структура не совпадает
    return false;
  }
  // Сравниваем значения и ныряем в детей
  return (
    node1.value === node2.value &&
    compare(node1.left, node2.left) &&
    compare(node1.right, node2.right)
  );
}

const tree1 = createNode(1, createNode(2), createNode(3));
const tree2 = createNode(1, createNode(2), createNode(3));
console.log(compare(tree1, tree2)); // true

const tree3 = createNode(1, createNode(3), createNode(3));
console.log(compare(tree1, tree3)); // false

const tree4 = createNode(1, createNode(2), createNode(3, null, createNode(3)));
console.log(compare(tree1, tree4)); // false