

let monnaieARendre = 50;

//function de rendre
  function rendre(val, solde, aRendre) {
    while (aRendre > 0 && solde > 0) {
      aRendre -= val;
      solde -= val;      
      rendre(val, solde, aRendre)
    }      
    console.log('​---------------------------');
    console.log('​rendre -> aRendre', aRendre);
    console.log('​---------------------------');

  }
  
  console.log('monnaieARendre -> ',monnaieARendre )
  
  rendre(1, 15, monnaieARendre)

  console.log('monnaieARendre -> ',monnaieARendre )