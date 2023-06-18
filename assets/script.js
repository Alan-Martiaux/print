const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
	
	
]





//gestion des slides 
let numeroSlide = 0;
console.log(numeroSlide);

let maxSlide = slides.length -1
console.log(maxSlide)


// Création de dots 
const dotContainer = document.querySelector(".dots");
for (let index = 0; index < slides.length; index++) {	
	let dotElement = document.createElement("div")
	dotContainer.appendChild(dotElement)
	dotElement.classList.add('dot');
}



//Gestion des dots
const dots = document.querySelectorAll(".dot");



//Gestion des boutons
const nextMove = document.querySelector(".arrow_right");
const prevMove = document.querySelector(".arrow_left");
nextMove.addEventListener("click", next);
prevMove.addEventListener("click", prev);

//Gestion affichage
const bannerImage = document.querySelector(".banner-img");
const description = document.querySelector(".desc");

// Premier affichage de la page

dots[numeroSlide].classList.add("dot_selected");

// Bouton Suivant

function next() {	
	numeroSlide++;
	if (numeroSlide > maxSlide) {
		numeroSlide = 0;
		dots[maxSlide].classList.remove("dot_selected") 		
	}
	else {
		dots[numeroSlide - 1].classList.remove("dot_selected") 
	}

	console.log("Slide Suivante");
	genererSlide()
}

// Bouton Précédent
function prev() {
	numeroSlide--;
	if (numeroSlide < 0) {
		numeroSlide = maxSlide;
		dots[0].classList.remove("dot_selected"); 
	}
	else {
		dots[numeroSlide + 1].classList.remove("dot_selected") 
	}

	console.log("Slide Précédente")
	genererSlide()

 };


function genererSlide () {
	bannerImage .src = "./assets/images/slideshow/" + slides[numeroSlide].image;
	description .innerHTML = slides[numeroSlide].tagLine;
	dots[numeroSlide].classList.add("dot_selected");

}