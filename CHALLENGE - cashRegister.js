function checkCashRegister(price, cash, cid) {
  // preparation de l'objet à rendre
  const reponse = {
    status: "",
    change: []
  };

  //  tableau des valeurs //
  const valors = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  const cashInDrawer = cid.reverse();

  // calcul de la somme a rendre de base  //
  let sommeARendre = cash - price;

  // totalEnCaisse
  const totalEnCaisse = arr => arr.reduce((acc, curr) => acc + curr[1], 0);

  const choisir = () => {
    return totalEnCaisse(cid) === sommeARendre
      ? egal()
      : totalEnCaisse(cid) < sommeARendre
        ? pasAssez()
        : rendre();
  };

  function renderPossible() {
    const valide = valors.filter(valor => valor[1] <= sommeARendre);
    //console.log('valide => ', valide)
    const arr = [];
    cashInDrawer.forEach(val =>
      valide.forEach(valor => {
        // console.log(`val => ${val} valor => ${valor}`);
        if (val[0] === valor[0] && val[1] > 0) {
          arr.push(val)
        }
      })
    );
    //console.log("arr => ", arr);
    return arr
  }
  const good = renderPossible();
  console.log('good => ', good)

  // function renderPossible() {
  //   const valide = totalEnCaisse(cashInDrawer.filter(valor => valors.filter(cidValor => cidValor[0] === valor[0] && valor[1] <= sommeARendre)))
  //   console.log('valide => ', valide)
  //  return valide > sommeARendre
  //  ? true : false
  // }
  // console.log('renderPossible => ', renderPossible())

  function rendre() {
    console.log("inRendre");
  }

  //choisir()

  function videCaisse(valor, cidValor) {
    console.log("inVideCaisse");
  }

  function pasAssez() {
    reponse.status = "INSUFFICIENT_FUNDS";
    reponse.change = [];
    return reponse;
  }

  function egal() {
    reponse.status = "CLOSED";
    reponse.change.push(...cid.reverse());
    return reponse;
  }

  // console.log('​checkCashRegister -> reponse -> ', reponse)
  return reponse;
}

// ///////////////////  APPEL DE L'APP  /////////////////////
checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
])

// ///////////////////  APPEL DE L'APP  /////////////////////
// checkCashRegister(3.26, 100, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100]
// ])

// ///////////////////  APPEL DE L'APP  /////////////////////
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]);

// ///////////////////  APPEL DE L'APP  /////////////////////
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);

// ///////////////////  APPEL DE L'APP  /////////////////////
// checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])

// NSTRUCTIONS :

// JavaScript Algorithms and Data Structures Projects: Cash Register

// Design a cash register drawer function checkCashRegister()that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cidis a 2D array listing available currency.
// The checkCashRegister()function should always return an object with a statuskey and a changekey.
// Return {status: "INSUFFICIENT_FUNDS", change: []}if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]}with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// EXEMPLE:
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
