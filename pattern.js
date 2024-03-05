const pattern = (n) => {
  const arr = Array.from(Array(n)).map((e, i) => i + 1)

  arr.map((i) => {
    console.log(arr.slice(0, i).join(""))
  })

  arr.map((i) => {
    console.log(arr.slice(0, arr.length - i).join(""))
  })
}

pattern(0);
pattern(5);
pattern(10);