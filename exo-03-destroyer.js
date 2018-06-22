function destroyer(arr) {
  let [tab01,...tab02] = arguments
  console.log('tab01:',tab01);
  console.log('tab02:',tab02);

tab02.forEach(x=>tab01.includes(x) ? console.log('oui pour:',x) : console.log('non pour:',x ) )



  // Remove all the values

  // let [arr01, ...arr02] = [arr]
  // console.log('arr01:',arr01);
  // console.log('arr02:',arr02);


  // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);