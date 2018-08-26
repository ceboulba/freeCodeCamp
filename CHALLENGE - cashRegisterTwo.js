function checkCashRegister(price, cash, cid) {
  //retourne cid pour le ranger du + au - grand
  const valorsEnCaisse = cid.reverse();

  //preparation de l'objet à rendre
  const reponse = {
    status: "",
    change: []
  };

  //tableau des valeurs
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

  //calcul de la somme a rendre de base
  let sommeARendre = cash - price;

  //choix de la monnaie a rendre
  const makeAChoice = () => {
    return valors.filter(element => element[1] <= sommeARendre).find(val => {
      const [devisePropal, valprop] = val;
      const finded = valorsEnCaisse.find(propal => propal[0] === devisePropal && propal[1] > 0);
      return finded;
    });
  }

  //calcul du sock de la monnaie choisit
  const stock = (devise) => cid.find(valor => valor[0] === devise).slice(1)

  //calcul si la somme total en caisse est suffisante
  function checkMyTotal() {
    let totalEnCaisse = cid.reduce((acc, val) => acc + val[1], 0).toFixed(2);
    console.log("totalEnCaisse -> ", totalEnCaisse);
    return totalEnCaisse;
  }

  const rendre = () => {
    console.log(`on va rendre ${sommeARendre}`);
    let rendu = 0;
    let choix = makeAChoice();
    let stockDispo = stock(choix[0])
    console.log('​---------------------------------');
    console.log('​rendre -> stockDispo', stockDispo);
    console.log('​---------------------------------');

    sommeARendre > 0.00 && stockDispo > 0.00
      ? (() => {
        sommeARendre -= choix[1];
        rendu += choix[1];
        stockDispo -= choix[1];
        sommeARendre = sommeARendre.toFixed(2)
      })()
      : console.log('OUT')

    reponse.status = "OPEN";
    reponse.change.push([choix[0], rendu])
    sommeARendre > 0 ? rendre() :
      console.log('​-------------');
    console.log('​rendre -> sommeARendre => ', sommeARendre);
    console.log('​-------------');
  };

  //let choix = valor[1];
  // while (enStock > 0 && sommeARendre > 0) {
  //   sommeARendre -= choix;
  //   enStock -= choix;
  //   rendu += choix;
  // } 

  // if (sommeARendre === 0 || enStock === 0) {
  //   reponse.change.push([devise, rendu]);
  //   reponse.status = "OPEN";
  //   sommeARendre = sommeARendre.toFixed(2);
  //   console.log("sommeARendre -> ", sommeARendre);
  //   sommeARendre === 0 ? null : rendre();
  // }

  rendre();

  console.log("​------------------------");
  console.log("​checkCashRegister -> reponse -> ", reponse);
  console.log("​------------------------");
  return reponse;
}

/////////////////////  APPEL DE L'APP  /////////////////////
// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]);

/////////////////////  APPEL DE L'APP  /////////////////////

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],//55
  ["TEN", 20],//20
  ["TWENTY", 60],//60
  ["ONE HUNDRED", 100]
]);

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
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
