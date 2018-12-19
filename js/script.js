var pierre = document.getElementById("pierre");
var feuille = document.getElementById("feuille");
var ciseaux = document.getElementById("ciseaux");
var choixJoueur = document.getElementById("joueur");
var choixIA = document.getElementById("IA");
var resultat = document.getElementById("resultat");
var initPartie = document.getElementById("partie");

// var img1 = "img/rock.jpg";
// var img2 = "img/paper.jpg";
// var img3 = "img/sciss.jpg";

function randomImg(){
    var rando = Math.floor(Math.random()*3);
    if (rando == 1){
        IA.src = "img/rock.jpg";
    }else if (rando == 2){
        IA.src = "img/paper.jpg";
    } else {
        IA.src = "img/sciss.jpg";
    };
    return IA.src;
}

var partie = true;

pierre.addEventListener("click",function(){
    if (partie == true){
        choixJoueur.src = "img/rock.jpg";
        // IA.src = randomImg ();
        var rando = Math.floor(Math.random()*3);
        if (rando == 1){
            choixIA.src = "img/rock.jpg";
            resultat.innerHTML = "Match nul";
            resultat.style.backgroundColor = "orange";
        }else if (rando == 2){
            choixIA.src = "img/paper.jpg";
            resultat.innerHTML = "Vous avez perdu";
            resultat.style.backgroundColor = "red";
        } else {
            choixIA.src = "img/sciss.jpg";
            resultat.innerHTML = "Vous avez gagné";
            resultat.style.backgroundColor = "green";
        };
        partie = false;
    }   
});

feuille.addEventListener("click",function(){
    if (partie == true){
        choixJoueur.src = "img/paper.jpg";
        // IA.src = randomImg ();
        var rando = Math.floor(Math.random()*3);
        if (rando == 1){
            choixIA.src = "img/paper.jpg";
            resultat.innerHTML = "Match nul";
            resultat.style.backgroundColor = "orange";
        }else if (rando == 2){
            choixIA.src = "img/sciss.jpg";
            resultat.innerHTML = "Vous avez perdu";
            resultat.style.backgroundColor = "red";
        } else {
            choixIA.src = "img/rock.jpg";
            resultat.innerHTML = "Vous avez gagné";
            resultat.style.backgroundColor = "green";
        };
        partie = false;
    }    
});

ciseaux.addEventListener("click",function(){
    if (partie == true){
        choixJoueur.src = "img/sciss.jpg";
        // IA.src = randomImg ();
        var rando = Math.floor(Math.random()*3);
        if (rando == 1){
            choixIA.src = "img/sciss.jpg";
            resultat.innerHTML = "Match nul";
            resultat.style.backgroundColor = "orange";
        }else if (rando == 2){
            choixIA.src = "img/rock.jpg";
            resultat.innerHTML = "Vous avez perdu";
            resultat.style.backgroundColor = "red";
        } else {
            choixIA.src = "img/paper.jpg";
            resultat.innerHTML = "Vous avez gagné";
            resultat.style.backgroundColor = "green";
        };
        partie = false;
    }
});


initPartie.addEventListener("click", function(){
    choixJoueur.src = "images/Portrait-icon.png";
    choixIA.src ="images/IA.jpg";
    resultat.style.backgroundColor = " rgba(116, 81, 56, 0.4)";
    resultat.innerHTML = "Prêt pour le combat ?";
    partie = true;
});






// feuille.addEventListener("click",function(){
//     joueur.src = "img/paper.jpg";
//     IA.src = randomImg ();
//     if (IA.src = "img/sciss.jpg"){
//         resultat.innerHTML = "Vous avez perdu";
//         resultat.style.backgroundColor = "red";
//     } else if (IA.src = "img/rock.jpg"){
//         resultat.innerHTML = "Vous avez gagné";
//         resultat.style.backgroundColor = "green";
//     }else {
//         resultat.innerHTML = "Match nul";
//         resultat.style.backgroundColor = "orange";
//     };
// });

// ciseaux.addEventListener("click",function(){
//     joueur.src = "img/sciss.jpg";
//     IA.src = randomImg ();
//     if (IA.src = "img/rock.jpg"){
//         resultat.innerHTML = "Vous avez perdu";
//         resultat.style.backgroundColor = "red";
//     } else if (IA.src = "img/paper.jpg"){
//         resultat.innerHTML = "Vous avez gagné";
//         resultat.style.backgroundColor = "green";
//     }else {
//         resultat.innerHTML = "Match nul";
//         resultat.style.backgroundColor = "orange";
//     }
// });

// function result (){
//     if(joueur.src = img1){
//         if (IA.src = img2){
//             resultat.innerHTML = "Vous avez perdu";
//             resultat.style.backgroundColor = "red";
//         } else if (IA.src = img3){
//             resultat.innerHTML = "Vous avez gagné";
//             resultat.style.backgroundColor = "green";
//         }else {
//             resultat.innerHTML = "Match nul";
//             resultat.style.backgroundColor = "orange";
//         }
//     } else if (joueur.src = img2){
//         if (IA.src = img3){
//             resultat.innerHTML = "Vous avez perdu";
//             resultat.style.backgroundColor = "red";
//         } else if (IA.src = img1){
//             resultat.innerHTML = "Vous avez gagné";
//             resultat.style.backgroundColor = "green";
//         }else {
//             resultat.innerHTML = "Match nul";
//             resultat.style.backgroundColor = "orange";
//         }
//     } else {
//         if (IA.src = img1){
//             resultat.innerHTML = "Vous avez perdu";
//             resultat.style.backgroundColor = "red";
//         } else if (IA.src = img2){
//             resultat.innerHTML = "Vous avez gagné";
//             resultat.style.backgroundColor = "green";
//         }else {
//             resultat.innerHTML = "Match nul";
//             resultat.style.backgroundColor = "orange";
//         }
//     }
// }
