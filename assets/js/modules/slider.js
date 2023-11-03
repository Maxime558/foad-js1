// Sélection des éléments HTML nécessaires
const slider = document.querySelector(".slider");
const slideImage = document.querySelector(".slide .slide-img");
const slideTitle = document.querySelector(".title");
const slideDescription = document.querySelector(".description");

// Intervalle de temps entre les transitions de diapositives (4 secondes)
const interval = 4000;

// Sélection des boutons précédent et suivant
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Initialisation de l'index de la diapositive actuelle
let currentIndex = 0;

// Fonction pour mettre à jour la diapositive en fonction du catalogue
function updateSlide(catalogue) {
    slideImage.src = catalogue[currentIndex].imageUrl;
    slideImage.alt = "Slider Image";
    slideTitle.textContent = catalogue[currentIndex].title;
    slideDescription.textContent = catalogue[currentIndex].description;
}

function transitionToNextSlide(catalogue) {
    currentIndex = (currentIndex + 1) % catalogue.length;
    updateSlide(catalogue);
}

function transitionToPrevSlide(catalogue) {
    currentIndex = (currentIndex - 1 + catalogue.length) % catalogue.length;
    updateSlide(catalogue);
}

function startSlider(catalogue) {
    updateSlide(catalogue);

    setInterval(() => transitionToNextSlide(catalogue), interval);

    prevButton.addEventListener("click", () => transitionToPrevSlide(catalogue));
    nextButton.addEventListener("click", () => transitionToNextSlide(catalogue));
}

export { startSlider };