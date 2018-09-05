
function orbitalPeriod(arr) {
  const reponse = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.map(elem => {
    const {name, avgAlt} = elem
    console.log('elem => ', name)
    const data = calcul(GM, earthRadius, avgAlt)
    console.log('data => ', data)
    reponse.push({name: name, orbitalPeriod: data} )
  })

  function calcul (GM, earthRadius, avgAlt) {
    const result = Math.round(  2 * Math.PI * Math.sqrt( (Math.pow( (earthRadius + avgAlt), 3)) / GM ) )
    return result
  };
  
  console.log('reponse => ', reponse)

  return reponse;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

/*
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

                            should return

[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
*/
