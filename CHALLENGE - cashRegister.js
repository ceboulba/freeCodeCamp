function checkCashRegister (price, cash, cid) {
  // preparation de l'objet à rendre
  const reponse = {
    status: '',
    change: []
  }

  //  tableau des valeurs //
  const valors = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01]
  ]

  let cashInDrawer = cid.reverse()

  // calcul de la somme a rendre de base  //
  let sommeARendre = cash - price

  // totalEnCaisse
  const totalEnCaisse = arr => arr.reduce((acc, curr) => acc + curr[1], 0)

  const choisir = () => {
    return totalEnCaisse(cid) === sommeARendre
      ? egal()
      : totalEnCaisse(cid) < sommeARendre
        ? pasAssez()
        : renderPossible() > sommeARendre
          ? rendre()
          : pasAssez()
  }

  function renderPossible () {
    const valide = valors.filter(valor => valor[1] <= sommeARendre)
    const arr = []
    cashInDrawer.forEach(val =>
      valide.forEach(valor => {
        if (val[0] === valor[0] && val[1] > 0) {
          arr.push(val)
        }
      })
    )
    return totalEnCaisse(arr).toFixed(2)
  }

  function rendre () {
    let rendu = 0
    // const validValor = valors.find(valor => valor[1] <= sommeARendre)
    const validValor = valors.find(valor => cid.find(cidValor => cidValor[0] === valor[0] && valor[1] <= sommeARendre && cidValor[1] > 0))
    const index = cid.reverse().findIndex(val => val[0] === validValor[0])
    // console.log('validValor => ', validValor)
    // console.log('index => ', index)
    // console.log('sommeARendre => ', sommeARendre)

    while (sommeARendre > 0 && cid[index][1] > 0 && sommeARendre >= validValor[1]) {
      sommeARendre -= validValor[1]
      cid[index][1] -= validValor[1]
      rendu += validValor[1]
      sommeARendre = sommeARendre.toFixed(2)
    }

    reponse.status = 'OPEN'
    reponse.change.push([validValor[0], rendu])

    if (sommeARendre > 0) {
      rendre()
    }
    return reponse
  }

  function pasAssez () {
    reponse.status = 'INSUFFICIENT_FUNDS'
    reponse.change = []
    return reponse
  }

  function egal () {
    reponse.status = 'CLOSED'
    reponse.change.push(...cid.reverse())
    return reponse
  }
  choisir()
  console.log('Reponse => ', reponse)
  return reponse
}

// ///////////////////  APPEL DE L'APP  /////////////////////
checkCashRegister(3.26, 100, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]])
