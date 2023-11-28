/*let tabSizes = ['s', 'm', 'l', 'XL'];
document.write('<select>');
 for(let i = 0; i < tabSizes.length; i++){
    document.write('<option>' + tabSizes[i] + '</option>'); }
document.write('</select>');


let cats = ['Pixel', 'Saxo', 'Cody', 'Choupette', 'Scar', 'Galy', 'Merlin', 'Yuzu'];
document.write('<ul>');
for(let e = 0; e < cats.length; e++){
    document.write('<li>' + cats[e] + '</li>');
}
document.write('</ul>');

let chien = ['Pixel', 'Saxo', 'Cody', 'Choupette', 'Scar', 'Galy', 'Merlin', 'Yuzu'];

document.write('<ul>');
let a = 0;
while(a<chien.length){
    document.write('<li>' + chien[a] + '</li>');

    a++
}
document.write('</ul>');*/




ARRAYS
let contact1 = [2, 56, 8];
let res = 0;
for( let i = 0; i < contact1.length; i++) {
  res += contact1[i];
}
  console.log(res);





let arr = [2, 56, 8];
arr[1] = 'Théo';
arr;

// tableau.push('info'); AJOUTE A LA FIN
arr.push('Théo');
// 	tableau.unshift('info'); AJOUTE AU DEBUT
arr.unshift('Clovis');
// tableau.pop(); RETIRE LE DERNIER
arr.pop();
// tableau.shift(); RETIRE LE 1er
arr.shift();
arr;




let arr = [2, 56, 8, true, 'Pixel'];
/* SPLICE()
2 arguments au moins :
1- position de départ (comme celle du curseur par ex)
2- le nombre de valeurs (indexes du tableau) à supprimer
3- optionnel : toutes les valeurs à ajouter
*/
arr.splice(2, 0, 'Théo', 'Jules', 'Houdy');
// SLICE() (trancher)
// slice permet de créer un nouveau tableau à partir d'un premier tableau
// il prend 2 arguments : le premier est l'indice de départ et le second l'indice de fin
// il ne modifie pas le tableau d'origine
let newArr = arr.slice(1, 3);
newArr;
arr;








/*EXO - Array - FavFoods
1- Créer un tableau (array) de vos plats préférés (favFoods). Il doit avoir au moins 3 éléments.
2- Afficher le 2nd élément de favFoods.
2bis- Changer le dernier élément de favFoods pour un autre de vos mets favoris.
3- Retirer le 1er élément de favFoods et stocker le dans une variable ancienFavFoods. Afficher le tableau favFoods et la variable ancienFavFoods.
4- Ajouter un autre élément à favFoods en fin de tableau. Afficher le tableau.
5- Ajouter un autre élément à favFoods en début de tableau. Afficher le tableau.
6- Créer un tableau vide et utiliser dessus la méthode pop(). Que se passe-t-il ?
7- Dans les exemples ci-dessous utiliser splice() pour convertir le 1er tableau et obtenir le 2nd tableau fournit : [2, 3, 4, 5] -> [2, 4, 5] ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"] [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]*/



let FavFoods = ['burger', 'tacos', 'grec'];
console.log(FavFoods[1]);
FavFoods.splice(2, 1, 'ampanada');
FavFoods.shift();
let lastFavFoods = FavFoods.slice(0, 1);
FavFoods.push('riotpoint');
FavFoods.unshift('radiant');
console.log(FavFoods);
lastFavFoods;
let clovis = [];
clovis.pop();
console.log(clovis);



/* ---------------------------------
            EXERCICE - Cats' names
---------------------------------- */

// -- Supposons le tableau suivant :
let cats = ['Pixel', 'Saxo', 'Cody', 'Choupette', 'Scar', 'Galy', 'Merlin', 'Yuzu'];
let res = ' ' ;
/*
 * CONSIGNE : Grâce à une boucle FOR, puis avec une boucle WHILE
 * affichez la liste des prénoms
 * du tableau ci-dessus sur votre page.
 */
 
for (let i = ' '; i < cats.length; i++){
  res += cats[i];
} 

console.log(res);


let cats = ['Pixel', 'Saxo', 'Cody', 'Choupette', 'Scar', 'Galy', 'Merlin', 'Yuzu'];
let res = ' ' ;
let i = ' '

while (i < cats.length) {
  res += cats[i];
  i++
}






/*
 * EXERCICE
 * Array - Best Friends
 *

let people = ["Greg", "Mary", "Devon", "James"];

    1- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console
    2- Supprimer "Greg" du tableau > afficher.
    3- Supprimer "James" du tableau > afficher.
    4- Ajouter "Matt" en début de tableau > afficher.
    5- Ajouter votre prénom en fin de tableau > afficher.
    6- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console jusqu'à "Mary" puis sortir de la boucle (petite recherche à faire).
    7- Faire une copie du tableau avec slice : cette copie ne doit PAS inclure ni "Mary" ni "Matt".
    8- Trouver l'indice de "Mary".
    9- Trouver l'indice de "Foo" (le résultat devrait être -1).
    */


let people = ["Greg ", "Mary ", "Devon ", "James"],
    res = ' ' ,
    i = ' ';

while (i < people.length) {
  res += people[i];
  i++
}
console.log(res);

people.shift();
people.pop();
people.unshift('Matt');
people.push('Houdy');

while(people.splice(2, 3)){
  console.log(people);
  i++
  break;
}

let people = ["Matt ", "Mary ", "Devon ", "Houdy"];

newpeople = people.slice(2, 4);

indice = people.indexOf("Mary");
indice = people.indexOf("Foo");
console.log(indice);   

newpeople;


/*10- Redéfinir la variable avec le tableau de départ : let people = ["Greg", "Mary", "Devon", "James"];.
    Avec la propriété splice, supprimer "Devon" et ajouter "Elizabeth" et "Artie". Le résultat attendu est le suivant >> ["Greg", "Mary", "Elizabeth", "Artie", "James"].
    11- Créer une nouvelle variable appelée withBob contenant le tableau people concaténé avec la string "Bob".
 */

let people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 0, "Elizabeth", "Artie")

people;



let withBob = [ "Greg", "Mary", "Elizabeth", "Artie", "James" ] + "houdy"





    // EXO - Holidays
// boucles sur un array et tableaux HTML
// 1- A partir d'un array JS qui contient les 12 mois de l'année, afficher les mois dans un tableau HTML 
// 2- le tableau HTML affiche 3 mois par ligne
// 3- les mois où vous avez des vacances sont avec un fond vert
// 4- les autres avec un autre fond de couleur 


let mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];














