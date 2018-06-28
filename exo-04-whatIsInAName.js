function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
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
  return arr;
}

whatIsInAName(
  [
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ]
, { last: "Capulet" });