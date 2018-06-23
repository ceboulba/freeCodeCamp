function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const k = Object.keys(source);

 collection.forEach(element => {
   const test = k.map(key => element[key] ? true : false)
   const taille = test.filter( x=> x === true ) 
   test.length === taille.length ?
   arr.push(element) :
   console.log('no')
 });
 
  // Only change code above this line
  console.log('arr: ', arr)
  return arr;
}


whatIsInAName(
  [
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ]
  , { "apple": 1, "bat": 2 });

  whatIsInAName(
    [
      {"a": 1, "b": 2, "c": 3}
    ]
    , {"a": 1, "b": 9999, "c": 3}  );