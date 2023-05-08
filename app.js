const btns = document.querySelectorAll('.btn-modale'); //cette constante selcectionne tous les btn-modale
const modaleEquipement = document.querySelector('.bloc-modale');
const fermetureModale = document.querySelector('.fermeture-modale');
const imgIndex = document.querySelector('.bloc-modale img');

//Création de l'événement click sur tous les btns

btns.forEach(btn => { //forEach pour chaque btns
    btn.addEventListener('click', (e) => {
        imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
        //e.target correspond au bouton sur lequel on vient de cliquer
        //son attribut data-index correspond au numéro de l'image à récupérer
        //cette dernière ligne renvoi au nom de l'image à chercher dans le dossier ressource
        modaleEquipement.classList.add('active-modale');
        //une fois que l'on a cliquer sur l'image, il faut faire apparaître la modale, on lui donne alors la class active-modale
    })
})

modaleEquipement.addEventListener('click', () => {
    modaleEquipement.classList.remove('active-modale');
}) // permet de fermer la modale en cliquant n'importe où, on garder quand même le fermeture-modale visuellement pour indiquer que l'on peut fermer
