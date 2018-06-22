function sumAll(arr) {
  let [min, max] = arr;
  min < max ? null : [min, max] = [max, min];
  let sum = 0;
  for (let i = min; i < max; i++) {
    console.log("i: ", i);
    sum += i;
  }
  return sum + min + max - min;
}

sumAll([1, 4]);
