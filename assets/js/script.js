import { catalogue } from "./modules/catalogue.js";
import { startSlider } from "./modules/slider.js";

document.addEventListener("DOMContentLoaded", function () {
    // Appel de la fonction "startSlider" avec les données du catalogue
    startSlider(catalogue);
});