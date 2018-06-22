function destroyer(arr) {
  let [tab01,...tab02] = arguments
  console.log('tab01:',tab01);
  console.log('tab02:',tab02);

  const r = [];

tab02.forEach(x=>tab01.includes(x) ? console.log('oui pour:',x) : r.push(x));
tab01.forEach(x=>tab02.includes(x) ? console.log('oui pour:',x) : r.push(x));

console.log('r: ',r)
 return r;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);