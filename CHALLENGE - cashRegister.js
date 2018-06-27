function checkCashRegister(price, cash, cid) {
  const monnaie = cash - price;
  console.log(`monnaie à rendre: ${monnaie}`);
  var change;
  console.log(`price= ${price}, cash= ${cash} and cid=${cid}`);
  console.log('typeOF: ', typeof(cid));
  console.log('CID: ', cid[0]);
  const maCaisse = {};
  cid.map(obj => {
    const name = obj[0];
    const valor = obj[1];
    maCaisse[name] = obj[1]
  })

console.log('MA CAISSE PENNY:', maCaisse)
 

  function test(somme) {

  }

  // Here is your change, ma'am.
  return change;
}

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
$0.01 (PENNY)
$0.05 (NICKEL)
$0.1  (DIME)
$0.25 (QUARTER)
$1    (DOLLAR)
$5    (FIVE)
$10   (TEN)
$20   (TWENTY)
$100  (ONE HUNDRED)

JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/
