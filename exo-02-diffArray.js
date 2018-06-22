function diffArray(arr1, arr2) {
  let [tab01, tab02] = [arr1, arr2];

  tab01.length > tab02.length
    ? console.log("oui")
    : ([tab01, tab02] = [tab02, tab01]);

  const tab03 =[]
  tab01.map(w => tab02.includes(w) ? null : tab03.push(w) )
  tab02.map(w => tab01.includes(w) ? null : tab03.push(w) )


  console.log('tab03: ', tab03)
  
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
