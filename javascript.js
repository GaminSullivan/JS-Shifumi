//Création du tableau avec les éléments du jeu
var mishoufi = ['Pierre', 'Feuille', 'Ciseaux'];
var scoreJ = 0;
var scoreO = 0;
var nombreMancheTotale = 3 ;


//Renvoie un nombre aléatoire 
function nombreAleatoire(max) {
    return Math.round(Math.random() * max);
}

//Permet de générer un pierre feuille ciseaux aléatoirement depuis le tableau
function mainAleatoire() {
    return mishoufi[nombreAleatoire(2)];
}


for (var i = 0; i < nombreMancheTotale; i++) {
    //Ordinateur créer un nouveau signe
    var main_ordinateur = mainAleatoire();
    var nombreManche = i+1; 
    var main_joueur = prompt("Manche N° " + nombreManche + " \r\n Shi-Fu-Mi ? \r\n Pierre, Feuille ou Ciseaux ?");

   
    //Comparaison de toute les manches Égalité
    if (main_joueur == main_ordinateur) {
        
        scoreJ++;
        scoreO++;
        alert("L'Ordi a choisi " +main_ordinateur+ "\r\n Égalité \r\n Joueur : " + scoreJ + " pts \r\n Ordi : " + scoreO + " pts");
        
    }
    //Tous les cas ou le joueur perd contre l'ordinateur
    else if (main_joueur == "Pierre" && main_ordinateur == "Feuille" || main_joueur == "Ciseaux" && main_ordinateur == "Pierre" || main_joueur == "Feuille" && main_ordinateur == "Ciseaux") {
        
        scoreO++;
        alert("L'Ordi a choisi " +main_ordinateur+ "\r\n Vous avez perdu ! \r\n Joueur : " + scoreJ + " pts \r\n Ordi : " + scoreO + " pts");
        
    }
    //Tous les cas ou l'ordinateur perd contre l'utilisateur
    else if (main_ordinateur == "Pierre" && main_joueur == "Feuille" || main_ordinateur == "Ciseaux" && main_joueur == "Pierre" || main_ordinateur == "Feuille" && main_joueur == "Ciseaux") {
       
        scoreJ++;
        alert("L'Ordi a choisi " +main_ordinateur+ "\r\n Vous avez gagné ! \r\n Joueur : " + scoreJ + " pts \r\n Ordi : " + scoreO + " pts");
        
    }

}

if (scoreO>scoreJ) {
    alert("TU AS PERDU !!  ");
    
}
else 
{
    alert("TU AS GAGNE");
}









