
// ! ne pas utiliser EVAL pour le bouton résult, mais ce code à la place : function computeResult(str) {
//     return Function("return " + str)();
//   }
  
//   const a = "(13 + 17) / 3";
  
//   console.log(computeResult(a)); // Should display 10


//définir tous les v de l'html
const v1 = { value: 1 };
const v2 = { value: 2 };
const v3 = { value: 3 };
const v4 = { value: 4 };
const v5 = { value: 5 };
const v6 = { value: 6 };
const v7 = { value: 7 };
const v8 = { value: 8 };
const v9 = { value: 9 };
const v0 = { value: 0 };

const virgule = { value: '.' }


let nombres1 = [];
let nombres2 = [];
let operationCourante = null;
let resultat

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

function afficherResultat(){
    const fenetre = document.getElementById("fenetre"); // c'est un alias

    fenetre.value = resultat > 1000000000 ? expo(resultat, 5) : resultat;

}
function afficher(){
    const fenetre = document.getElementById("fenetre"); // c'est un alias
    let chiffres
  
    if (operationCourante) {
        chiffres = nombres2.join('')
    } else {
        chiffres = nombres1.join('')
    }

    fenetre.value = chiffres
}


function val(chiffre){
    if (operationCourante) {
        if (nombres2.length <= 14) {
            nombres2.push(chiffre);
        }
    } else {
        if (nombres1.length <= 14) {
            nombres1.push(chiffre);
        }
    }

    afficher();
}

function calculer() {
    const termes1 = parseFloat(nombres1.join(''), 10);
    const termes2 = parseFloat(nombres2.join(''), 10);
    nombres1 = []
    nombres2 = []

    const op = (operation) => {
        if (resultat) {
            resultat = operation(resultat, termes2)
        } else {
            resultat = operation(termes1, termes2)
        }
    }

    switch(operationCourante) {
        case '+':
            op((a,b) => a + b)
            break;
        case '-':    
            op((a,b) => a - b)
            break;
        case 'x':   
            op((a,b) => a * b)
            break;
        case '/':   
            op((a,b) => a / b)
            break;
        default:
 
        }
        afficherResultat()
        operationCourante= null
}

function effacer() {
    nombres1 = []
    nombres2 = []
    operationCourante = null;
    resultat = undefined
}

function operation(value) {
    if (operationCourante && nombres2.length) {
        calculer()
    }

    operationCourante = value;
}

// activer le support des touches clavier
document.addEventListener(
    "keydown",
    (event) => {
      const keyName = event.key;
      const keyValue = parseInt(keyName, 10)

      if (!isNaN(keyValue)) {
        val(keyValue)
      }
    },
    false,
  );
 