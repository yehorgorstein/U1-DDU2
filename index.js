// Recommended: All functions declared here
function createAllCityBoxes (cityContainer){
    for (let i = 0; i < cities.length; i++){
        let cityBox = document.createElement("div");
        cityBox.classList.add("cityBox");
        cityBox.setAttribute("id", cities[i].name);
        cityContainer.appendChild(cityBox);
        cityBox.textContent = cities[i].name;
    }
}

function markCityBox (cityObject, kindOfCity){
    for (let i = 0; i < cities.length; i++){
        if (cities[i].name === cityObject) {
            let cityBox = document.querySelector(`[id="${cities[i].name}"]`);
            target.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
            if (kindOfCity === "target"){
                cityBox.classList.add("target")
            } else if (kindOfCity === "closest"){
                cityBox.classList.add("closest");
            } else if (kindOfCity === "furthest"){
                cityBox.classList.add("furthest");
            }
            console.log(kindOfCity)
        }
    }
}

// Recommended: constants with references to existing HTML-elements

const cityContainer = document.getElementById("cities");
let cityTarget = prompt("Vilken stad?")
let kindOfCity = "target";
let target = document.querySelector("h2");


// Recommended: Ask for the city name and then the rest of the code

createAllCityBoxes(cityContainer);
markCityBox(cityTarget, kindOfCity);