const btns = document.querySelectorAll('.btn-modale'); //cette constante selcectionne tous les btn-modale
const modaleEquipement = document.querySelector('.bloc-modale');
const fermetureModale = document.querySelector('.fermeture-modale');
const imgIndex = document.querySelector('.bloc-modale img');

//Création de l'événement click sur tous les btns

if(windows.matchMedia("(min-width: 850px)").matches){ //dit qu'à partir de 850px on ne veut plus de modal
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
<<<<<<< HEAD
})

modaleEquipement.addEventListener('click', () => {
    modaleEquipement.classList.remove('active-modale');
}) // permet de fermer la modale en cliquant n'importe où, on garder quand même le fermeture-modale visuellement pour indiquer que l'on peut fermer


// Anime navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30) {//scrollY est ce que l'on vient de scroller depuis le top
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})
=======
    
    modaleEquipement.addEventListener('click', () => {
        modaleEquipement.classList.remove('active-modale');
    }) // permet de fermer la modale en cliquant n'importe où, on garder quand même le fermeture-modale visuellement pour indiquer que l'on peut fermer
//matchMedia est une fonction qui retourne true ou false et attend des arguements
}
>>>>>>> section_choix
