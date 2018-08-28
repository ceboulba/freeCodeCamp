
function checkCashRegister(price, cash, cid) {
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
  // const makeAChoice = () => {
  //   const temp = valors.find(valor => valor[1] < sommeARendre);
  //   return temp;
  // };

  const makeAChoice = () => valors.filter(valor => valor[1] <= sommeARendre)
    .find(element => cid.find(cidElement => cidElement[0] === element[0] && cidElement[1] > 0))

    const choisir = () => {
      valors.filter(valor => valor[1] < sommeARendre)
    }
    console.log('choisir => ',choisir())

    const check = () => {
      const essais = makeAChoice()
      if(essais) {
        return essais
      }       
    } 
      
    console.log('​------------------------------------');
    console.log('​checkCashRegister -> essais', check());
    console.log('​------------------------------------');   


  function compare(valor, cidValor) {
    if (valor[0] === cidValor[0] && cidValor > 0) {
      return [valor[0], valor[1], cidValor[1]]
    }
  }

  //calcul si la somme total en caisse est suffisante
  function checkMyTotal() {
    let totalEnCaisse = cid.reduce((acc, val) => acc + val[1], 0).toFixed(2);
    console.log("totalEnCaisse -> ", totalEnCaisse);
    return totalEnCaisse;
  }

  const rendre = () => {
    console.log(`on va rendre ${sommeARendre}`);
    if (sommeARendre > 0) {

      let rendu = 0;
      let [devise, monnaie] = check();
      let stock = cid.find(val => val[0] === devise);
      console.log("rendre -> devise -> ", devise);
      console.log("rendre -> monnaie -> ", monnaie);
      console.log("rendre -> stock -> ", stock);

      while (sommeARendre > 0 && stock > 0 && sommeARendre > monnaie) {
        sommeARendre -= monnaie;
        stock -= monnaie;
        rendu += monnaie;
        sommeARendre = sommeARendre.toFixed(2)
      }
      reponse.status = 'OPEN';
      reponse.change.push([devise, rendu])
      console.log(`
        on va rendre ${sommeARendre} 
        et on vient de rendre ${rendu}`);
    } else {
      return
    }

    sommeARendre > 0
      ? rendre()
      : null
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

  //rendre();

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
  ["FIVE", 55],
  ["TEN", 20],
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
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.