function checkCashRegister(price, cash, cid) {
  let monnaie = cash - price; // monnaie à rendre 0.5
  var change = {
    status: "OPEN",
    change: []
  };

  let maCaisse = cid;

  rend(monnaie, 0.25);

  function rend(monnaie, val) {
    while (monnaie > 0) {
      console.log("monnaie:", monnaie);
      monnaie = monnaie - val;
    }
  }

  console.log("CHANGE:", change);
  //return change;
}

//////////////////////////////////////////////////////////////

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

/*
JavaScript Algorithms and Data Structures Projects: Cash Register

Design a cash register drawer function checkCashRegister()that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cidis a 2D array listing available currency.
The checkCashRegister()function should always return an object with a statuskey and a changekey.
Return {status: "INSUFFICIENT_FUNDS", change: []}if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]}with cash-in-drawer as the value for the key changeif it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

EXEMPLE: 
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])should return {status: "OPEN", change: [["QUARTER", 0.5]]}

  Currency Unit        Amount
Penny                $0.01 (PENNY)
Nickel               $0.05 (NICKEL)
Dime                 $0.1 (DIME)
Quarter              $0.25 (QUARTER)
Dollar               $1 (DOLLAR)
Five Dollars         $5 (FIVE)
Ten Dollars          $10 (TEN)
Twenty Dollars       $20 (TWENTY)
One-hundred Dollars  $100 (ONE HUNDRED)

*/
const valors = {
  Penny: 0.01,
  Nickel: 0.05,
  Dime: 0.1,
  Quarter: 0.25,
  Dollar: 1,
  fiveDollars: 5,
  tenDollars: 10,
  twentyDollars: 20,
  oneHundredDollars: 100
};
