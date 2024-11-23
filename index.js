// Recommended: All functions declared here
function createAllCityBoxes (cityContainer){
    for (let i = 0; i < cities.length; i++){
        let cityBox = document.createElement("div");
        cityBox.classList.add("cityBox");
        cityContainer.appendChild(cityBox);
        cityBox.textContent = cities[i].name;
    }
}

function markCityBox (cityObject, kindOfCity){
    if (kindOfCity === "target"){
        cityObject.classList.add("target")
    } else if (kindOfCity === "closest"){
        cityObject.classList.add("closest")
    } else if (kindOfCity === "furthest"){
        cityObject.classList.add("furthest")
    }
}

// Recommended: constants with references to existing HTML-elements

const cityContainer = document.getElementById("cities");
let target = prompt("Vilken stad?");
let cityObject = document.querySelector("h2");

// Recommended: Ask for the city name and then the rest of the code

createAllCityBoxes(cityContainer);

markCityBox(cityObject, target);