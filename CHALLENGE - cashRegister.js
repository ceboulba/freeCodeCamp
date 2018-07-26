function checkCashRegister(price, cash, cid) {

  //crée mon tableau des valeurs
  const valors = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  //prepare mon objet de retour
  const change = {
    status: "",
    change: []
  };

  //objet du cash dispo en caisse
  let cashDispo = {}
  cid.map(el => {
    return cashDispo[el[0]] = el[1];
  })
  //console.log('cashDispo : ', cashDispo)

  //calcul la somme a rendre
  let monnaieARendre = cash - price;

  //calcul la somme total en caisse
  const sommeEnCaisse = cid.reduce((acc, curr) => {
    return acc += curr[1];
  }, 0).toFixed(2);
  console.log('somme en caisse: ', sommeEnCaisse)

  //si la sommeARendre est trop grande je change {change} puis return
  function verif() {
    if (monnaieARendre > sommeEnCaisse) {
      change.status = "INSUFFICIENT_FUNDS";
      console.log('pas assez d\'argent')
      return change;
    } else {
      rend(monnaieARendre, cashDispo)
    }
  }

  //function qui choisit ma monnaie
  function choose(monnaieARendre, cashDispo) {
    const temp = valors.filter(val => val[1] <= monnaieARendre && cashDispo[val[0]] > 0);
    return temp[0];
  }

  function rend(monnaieARendre, cashDispo) {
    let theChoice = choose(monnaieARendre, cashDispo)
    console.log('theChoice = ', theChoice)
  }

  rend(monnaieARendre, cashDispo);

  //rend()
  console.log('change: ', change)
  return change

}



/////////////////////  APPEL DE L'APP  /////////////////////
/*
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
*/
/////////////////////  APPEL DE L'APP  /////////////////////
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]])



// status: "INSUFFICIENT_FUNDS"
// status: "CLOSED"
// status: "OPEN"

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

/// MES PISTES ///

// je test si j'ai assez en caisse pour rendre la monnaie
  // function test(sommeEnCaisse, aRendre) {
  //   if (sommeEnCaisse < aRendre) {
  //     change.status = "INSUFFICIENT_FUNDS"
  //     console.log('change: ', change)
  //     return change
  //   }
  //   else {
  //     let compteur = 0

  //     function rend(m, v) {
  //       m >= v ?
  //         (() => {
  //           m -= v;
  //           compteur++;
  //           console.log(`m: ${m} et compteur: ${compteur}`);
  //           rend(m, v);
  //         })() :
  //         change.change.push(["quarter", v * compteur])
  //     }

  //     for (let i = valors.length - 1; i >= valors.Length; i--) {
  //       const valor = valors[i]
  //       rend(aRendre, valor)
  //     }
  //     console.log('change: ', change)
  //     return change;
  //   };
  // }
