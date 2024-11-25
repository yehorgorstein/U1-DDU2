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
    let cityFound = false;
    for (let i = 0; i < cities.length; i++){
        if (cities[i].name === cityObject) {
            let cityBox = document.querySelector(`[id="${cities[i].name}"]`);
            console.log(cityBox)
            if (cityBox){
                if (kindOfCity === "target"){
                    target.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
                    cityBox.classList.add("target");
                    document.title = cityObject;
                } else if (kindOfCity === "closest"){
                    closest.textContent = cities[i].name;
                    cityBox.classList.add("closest");
                } else if (kindOfCity === "furthest"){
                    furthest.textContent = cities[i].name;
                    cityBox.classList.add("furthest");
                }   
            } 
            cityFound = true;
            break;
        }
    }
    if (!cityFound) {
        doesNotExist.innerHTML = cityObject + " " + "finns inte i databasen";
        document.title = "Not Found";
    }
}

function getCityId(cityName){
    for (let i = 0; i < cities.length; i++){
        if (cities[i].name === cityName){
            return cities[i].id;
        }
    } 
}

function getCityNameById(cityId){
    for (let i = 0; i < cities.length; i++){
        if (cities[i].id === cityId){
            return cities[i].name;
        }
    }
}

function getClosestCity(targetCityObject) {
    targetCityObject = getCityId(cityTarget);
    let shortestDistance = Infinity;
    let closestCity = null;
    for (let i = 0; i < distances.length; i++){

        if (distances[i].city1 === targetCityObject){ 
            if (distances[i].distance < shortestDistance){
                shortestDistance = distances[i].distance;
                closestCity = distances[i].city2;
            }
        } else if (distances[i].city2 === targetCityObject){
            if (distances[i].distance < shortestDistance){
                shortestDistance = distances[i].distance;
                closestCity = distances[i].city1;
            }
        } 
        
        //console.log(distances[i].city1)
        //console.log(distances[i].city2)
        //console.log(distances[i].distance)
        //console.log(shortestDistance)
        //console.log(closestCity)
        //console.log(getCityNameById(closestCity))
    
    }

    if (closestCity) {
        const closestCityName = getCityNameById(closestCity);
        markCityBox(closestCityName, "closest");
        shortestDistanceToCity = shortestDistance;
    }
}

function getFurthestCity(targetCityObject) {
    targetCityObject = getCityId(cityTarget);
    let longestDistance = 0;
    let furthestCity = null;
    for (let i = 0; i < distances.length; i++){

        if (distances[i].city1 === targetCityObject){ 
            if (distances[i].distance > longestDistance){
                longestDistance = distances[i].distance;
                furthestCity = distances[i].city2;
            }

        } else if (distances[i].city2 === targetCityObject){
            if (distances[i].distance > longestDistance){
                longestDistance = distances[i].distance;
                furthestCity = distances[i].city1;
            }
        } 
        
        //console.log(distances[i].city1)
        //console.log(distances[i].city2)
        //console.log(distances[i].distance)
        //console.log(longestDistance)
        //console.log(furthestCity)
        //console.log(getCityNameById(furthestCity))
    
    }

    if (furthestCity) {
        const furthestCityName = getCityNameById(furthestCity);
        markCityBox(furthestCityName, "furthest");
        longestDistanceToCity = longestDistance;
    } 
}

const cityContainer = document.getElementById("cities");
let cityTarget = prompt("Vilken stad?")
let kindOfCity = "target";
let target = document.querySelector("h2");
let closest = document.getElementById("closest");
let furthest = document.getElementById("furthest");
let doesNotExist = document.querySelector("h3");
let diagram = document.getElementById("table");


// Recommended: Ask for the city name and then the rest of the code

createAllCityBoxes(cityContainer);
markCityBox(cityTarget, kindOfCity);
getClosestCity(cityTarget);
getFurthestCity(cityTarget);

let empty = document.createElement("div");
empty.style.height = "20px";
empty.classList.add("cell");
empty.textContent = "";
diagram.appendChild(empty);

function column (){
    for (let i = 0; i < cities.length; i++){
        let head_column = document.createElement("div");
        head_column.classList.add("head_column");
        head_column.classList.add("cell");
        diagram.appendChild(head_column);
        head_column.textContent = cities[i].id;
    }
}

function row (){
    for (let i = 0; i < cities.length; i++){
        let head_row = document.createElement("div");
        head_row.classList.add("head_row", "cell");
        diagram.appendChild(head_row);              
        head_row.textContent = cities[i].id + "-" + cities[i].name;
        if (cities[i].id % 2 === 0){
            head_row.classList.add("even_row");
        }
        for (let j = 0; j < cities.length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell"); 
            if (i === j) {
                cell.textContent = ""; 
            } else {
                let distance = "";
                for (const range of distances) {
                    if (range.city1 === i && range.city2 === j || range.city1 === j && range.city2 === i) {
                        distance = range.distance;
                        break;
                    }
                }
                cell.textContent = distance / 10; 
            }
            if (cities[i].id % 2 === 0){
                cell.classList.add("even_row");
            }
            
            diagram.appendChild(cell);
        }
        
    }
}

column();
row();
console.log(column)
console.log(row)