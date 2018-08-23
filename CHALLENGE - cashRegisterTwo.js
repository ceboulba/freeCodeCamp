function checkCashRegister(price, cash, cid) {
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

  //calcul de la somme a rendre
  let sommeARendre = cash - price;
  console.log("​------------------------------------------------");
  console.log("​checkCashRegister -> sommeARendre au debut -> ", sommeARendre);
  console.log("​------------------------------------------------");

  //choix de la monnaie a rendre
  const makeAChoice = () => {
    const temp = valors.find(val => val[1] < sommeARendre);
    return temp;
  };

  //calcul du sock de la monnaie choisit
  const stock = () => {
    const choice = makeAChoice();
    const temp = cid.find(val => val[0] === choice[0]);
    return temp;
  };

  const rendre = () => {
    let rendu = 0;
    let choix = makeAChoice();
    let stockDispo = stock();
    while (stockDispo[1] > 0 && sommeARendre > 0) {
      sommeARendre -= choix[1];
      stockDispo[1] -= choix[1];
      rendu += choix[1];
    }
    reponse.change.push([choix[0], rendu]);
    sommeARendre = parseInt(sommeARendre.toFixed(2))
    if(sommeARendre === 0.00) {
        reponse.status='OPEN'
    }
    console.log("rendre -> sommeARendre -> ", sommeARendre);
  };

  checkMyTotal();
  rendre();

  //calcul si la somme total en caisse est suffisante
  function checkMyTotal() {
    let totalEnCaisse = cid.reduce((acc, val) => acc + val[1], 0).toFixed(2);
    console.log("totalEnCaisse -> ", totalEnCaisse);
  }
  checkMyTotal();

        //calcul si la somme total en caisse est suffisante
        const checkMyTotal = ( () => {
            let totalEnCaisse = cid.reduce( (acc,val) => acc+val[1],0).toFixed(2)
            totalEnCaisse > sommeARendre ? 
                rendre() :
                (() => {
                    reponse.status = 'INSUFFICIENT_FUNDS';
                    reponse.change = [];
                })();
            } )()

     const rendre = () => {
        let rendu = 0;
        let choix = makeAChoice();
        let stockDispo = stock(choix);
        while(sommeARendre > 0 && stockDispo > 0) {
          sommeARendre-=choix[1];
          stockDispo -= choix[1];
          rendu += choix[1];
        }
        reponse.change.push([choix[0], rendu]);
        sommeARendre === 0 ?
        reponse.status = 'OPEN'
        : null

        }
    

        
       
        
    console.log('​------------------------');
    console.log('​checkCashRegister -> reponse -> ', reponse );
    console.log('​------------------------');
  return reponse;
	//preparation de l'objet a return
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

	//calcul de la somme a rendre
	let sommeARendre = cash - price;

	//choix de la monnaie a rendre
	const makeAChoice = () => {
		const temp = valors.find(val => val[1] < sommeARendre);
		return temp;
	};

	//calcul du sock de la monnaie choisit
	const stock = () => {
		const choice = makeAChoice();
		const temp = cid.find(val => val[0] === choice[0]);
		return temp;
	};

	const rendre = () => {
		let rendu = 0;
		let choix = makeAChoice();
		let stockDispo = stock();
		while (stockDispo[1] > 0 && sommeARendre > 0) {
			sommeARendre -= choix[1];
			stockDispo[1] -= choix[1];
			rendu += choix[1];
		}
		reponse.change.push([choix[0], rendu]);
		sommeARendre = parseInt(sommeARendre.toFixed(2))
		if (sommeARendre === 0.00) {
			reponse.status = 'OPEN'
		}
		console.log("rendre -> sommeARendre -> ", sommeARendre);
	};

	checkMyTotal();
	//rendre();

	//calcul si la somme total en caisse est suffisante
	function checkMyTotal() {
		let totalEnCaisse = cid.reduce((acc, val) => acc + val[1], 0).toFixed(2);
		console.log("totalEnCaisse -> ", totalEnCaisse);
	}
	checkMyTotal();

	console.log('​------------------------');
	console.log('​checkCashRegister -> reponse -> ', reponse);
	console.log('​------------------------');
	return reponse;
}

/////////////////////  APPEL DE L'APP  /////////////////////
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
