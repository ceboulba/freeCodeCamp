function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
<<<<<<< HEAD
  console.log(source)
  const k = Object.keys(source)
  // console.log('k: ', k)
  collection.forEach(element => {
    console.log('ELEMENT: ', element.last)
    element.k === source ?
    arr.push(element) :
    null
  });

  // Only change code above this line
  console.log('arr: ',arr)
=======
  const keys = Object.keys(source);
  console.log('Keys: ', keys)

  collection.map(obj => {
    console.log('obj : ', obj)
  })
 
  // Only change code above this line
  console.log('arr: ', arr)
>>>>>>> 12fbee86289efe27d353737d7548fdc758511abd
  return arr;
}


whatIsInAName(
  [
<<<<<<< HEAD
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ]
, { last: "Capulet" });
=======
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
>>>>>>> 12fbee86289efe27d353737d7548fdc758511abd
