function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  console.log('Keys: ', keys)

  collection.map(obj => {
    console.log('obj : ', obj)
  })
 
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