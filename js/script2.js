function shifumi() {
    //Déclaration des variables
    var iaChoice;
    var playerChoice;
    var winnerIs;
    
    //Déclaration des éléments du DOM
    var pierre = document.getElementById("pierre");
    var feuille = document.getElementById("feuille");
    var ciseaux = document.getElementById("ciseaux");
    var choixJoueur = document.getElementById("joueur");
    var choixIA = document.getElementById("IA");
    var resultat = document.getElementById("resultat");
    var initPartie = document.getElementById("partie");
    
    //TODO: Fonction Jeu
      //TODO: Choix de l'IA -> iaChoice
      iaChoice = Math.floor(Math.random()*3);
      
      //TODO: récupérer le choix du joueur -> playerChoice
    feuille.addEventListener("click",function(){
        playerChoice = 2;
    });
    ciseaux.addEventListener("click",function(){
        playerChoice = 0;
    });
    pierre.addEventListener("click",function(){
        playerChoice = 1;
    });
 
      //TODO: Comparer les choix (playerChoice, iaChoice)-> winnerIs
         //TODO: Si : Cas égalité
        if (playerChoise == iaChoise){
            winnerIs = 0;
        }
         //TODO: Sinon Si : Cas de victoire 
        else if ((playerChoise == 0 && iaChoise == 2)
        || (playerChoice == 1 && iaChoice == 0)
        || (playerChoice == 2 && iaChoice == 1)){
            winnerIs = 1;
        }
         //TODO: Sinon : Cas de défaite
        else {
            winnerIs = 2;
        }
      //TODO: Afficher les résultats
      //TODO: Afficher le choix du joueur (playerChoice)
        if (playerChoice == 1){
            choixJoueur.src = "img/rock.jpg";
        }else if (playerChoice == 2){
            choixJoueur.src = "img/paper.jpg";
        } else {
            choixJoueur.src = "img/sciss.jpg"; 
        };
        //TODO: Afficher le choix de l'IA (iaChoice)
        if (iaChoice == 1){
            IA.src = "img/rock.jpg";
        }else if (iaChoice == 2){
            IA.src = "img/paper.jpg";
        } else {
            IA.src = "img/sciss.jpg";
        };
        //TODO: Afficher le résultat

    //TODO: Fonction restart
    initPartie.addEventListener("click", function(){
        choixJoueur.src = "images/Portrait-icon.png";
        choixIA.src ="images/IA.jpg";
        resultat.style.backgroundColor = " rgba(116, 81, 56, 0.4)";
        resultat.innerHTML = "Prêt pour le combat ?";
        partie = true;
    });

}
    
    shifumi();
    
    
    
    
    