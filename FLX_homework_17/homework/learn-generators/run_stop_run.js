function *range(from, to) {
  let index = from;
  while(index <= to) {
    yield String(index++);
  }
}

for (var r of range(5, 10)) {
    console.log(String(r));
}
