function convertToRoman(num) {
  const number = num.toString().split("");
  const roman = [
    {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX"
    },
    {
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC"
    },
    {
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM"
    },
    {
      1: "M",
      2: "MM",
      3: "MMM"
    }
  ];

  const rep = [];

  function transform(number) {
    let u = 0;
    for (let i = number.length-1; i >= 0; i--) {
      const chiffre = number[i];
      roman[u][chiffre] !== undefined ?
      rep.unshift(roman[u][chiffre]) :
      null;
      u++;
    }
  }

  transform(number);
  console.log(rep);
  return rep.join('');
  //return unit[num];
}

convertToRoman(310);
