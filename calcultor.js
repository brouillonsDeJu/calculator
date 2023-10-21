
// ! ne pas utiliser EVAL pour le bouton résult, mais ce code à la place : function computeResult(str) {
//     return Function("return " + str)();
//   }
  
//   const a = "(13 + 17) / 3";
  
//   console.log(computeResult(a)); // Should display 10

// empecher l'utilisateur d'utiliser autre chose que des chiffres
// faire fonctionner les opérateurs
// faire fonctionner le résultat et son affichage
// faire fonctionner la touche supprimer

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


const nombres1 = [];
const nombres2 = [];
let operationCourante = null;

function afficher(resultat){
    const fenetre = document.getElementById("fenetre"); // c'est un alias
    let chiffres

    if (resultat) {
        chiffres = resultat
    } else {
        if (operationCourante) {
            chiffres = nombres2.join('')
        } else {
            chiffres = nombres1.join('')
        }
    }

    fenetre.value = chiffres
}


function val(chiffre){
    if (operationCourante) {
        nombres2.push(chiffre);
    } else {
        nombres1.push(chiffre);
    }
    afficher();
}

function calculer() {
    const termes1 = parseFloat(nombres1.join(''), 10);
    const termes2 = parseFloat(nombres2.join(''), 10);

    switch(operationCourante) {


        case '+':
            afficher(termes1 + termes2)

            break;
        

        case '-':    
            afficher(termes1 - termes2)
            break;
        case 'x':   
        afficher(termes1 * termes2)
            break;
        case '/':   
        afficher(termes1 / termes2);
            break;
        default:
            // erreur

        operationCourante= null

    }
}

function suppr() {

}

function operation(value) {
    console.log(value)
    operationCourante = value;
}
 


// se recharge au click instead energie solaire
// marque comme CASIO 