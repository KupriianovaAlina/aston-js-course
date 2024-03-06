class PaginationUtil {
  constructor(arr, n) {
    this.arr = arr;
    this.n = n;
  }

  pageCount() {
    return Math.ceil(this.arr.length / this.n);
  }

  itemCount() {
    return this.arr.length;
  }

  pageItemCount(pageNum) {
    const len = this.arr.slice(pageNum * this.n, pageNum * this.n + this.n).length;
    return (len > 0) ? len : -1;
  }

  pageIndex(index) {
    if (index > this.arr.length || index < 0) { return -1 };
    return Math.floor(index / this.n);
  }
}

// Пример реализации:
const helper = new PaginationUtil(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); // на последней странице - 2
console.log(helper.pageItemCount(2)); // -1, так как такой страницы нет
// // pageIndex - принимает индекс элемента в массиве значений и возвращает его страницу, иначе - 1
console.log(helper.pageIndex(5)); // 1
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(6)); // 1
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); //-1