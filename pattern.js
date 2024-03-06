const pattern = (n) => {
  const arr = Array.from(Array(n)).map((e, i) => i + 1);

  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + arr.slice(0, i - 1).join("") + i + arr.slice(0, i - 1).reverse().join(""))
  };

  for (let i = n - 1; i > 0; i--) {
    console.log(" ".repeat(n - i) + arr.slice(0, i - 1).join("") + i + arr.slice(0, i - 1).reverse().join(""))
  };
};

pattern(0);
pattern(5);
pattern(10);