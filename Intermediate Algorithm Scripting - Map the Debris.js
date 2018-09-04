function orbitalPeriod (arr) {
  var GM = 398600.4418
  var earthRadius = 6367.4447



  function calculate(GM, earthRadius, avgAlt, name) {
    this.GM = Math.floor(GM)
    this.earthRadius = Math.floor(earthRadius)
    this.avgAlt = Math.floor(avgAlt)
    this.name = name

    const orbit = 
  }

  return arr
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }])
