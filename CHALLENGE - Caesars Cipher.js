function rot13(str) { // LBH QVQ VG!
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const rep = []
    const decode = str.split('').map(c => {
      !alphabet.includes(c) ?
      rep.push(c) :
      (() => {        
        const number = alphabet.split('').indexOf(c);
        console.log(`carachter= ${c} et number= ${number}`);
        let indexNumber;
        number >= 13 ? 
        indexNumber = number - 13 :
        indexNumber = 26 + number - 13;
        console.log('essais: ',alphabet[indexNumber])
        rep.push(alphabet[indexNumber])
      })() 


    } )
console.log(rep.join(''))
  return rep.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");

/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/