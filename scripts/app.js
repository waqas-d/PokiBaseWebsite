import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localstorage.js";

// Ids
let pokimonImg = document.getElementById("pokimonImg");
let pokimonName = document.getElementById("pokimonName");
let pokimonAbility = document.getElementById("pokimonAbility");
let pokimonLocation = document.getElementById("pokimonLocation");
let pokimonEvoPath = document.getElementById("pokimonEvoPath");
let pokimonMoves = document.getElementById("pokimonMoves");
let pokimonMovesList = document.getElementById("pokimonMovesList");
let pokimonInput = document.getElementById("pokimonInput");
let searchBtn = document.getElementById("searchBtn");
let randomBtn = document.getElementById("randomBtn");
let shinyBtn = document.getElementById("shinyBtn");
let favoritesBtn = document.getElementById("favoritesBtn");



let pokimon = "";



const pokimonApi = async (pokimon) => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokimon  );
    const data = await promise.json();
    console.log(data);
    return data;
}
pokimonApi();

const pokimonApiImg = async (pokimon) => {
    const promise = await fetch("https://img.pokemondb.net/sprites/home/.jpg" + pokimon);
    const data = await promise.json();
    console.log(data);
    return data;
}
pokimonApiImg();

pokimonInput.addEventListener('keydown', async (event) => {
    // On enter I want this function to run
    if (event.key === "Enter") {
        pokimon = await pokimonApi(event.target.value);
        console.log(pokimon);
        digimonImg.src = digimon[0].img;
        digimonName.textContent = digimon[0].name;
        digimonStatus.textContent = digimon[0].level;
    } else if (event.key === "Enter") {
        pokimon = await pokimonApiImg(event.target.value);
        pokimonImg.src = pokimon[0].img;
    }
});






// favoriteBtn.addEventListener('click', () => {
//     saveToLocalStorage(digimon[0].name);
// })

// getFavoritesBtn.addEventListener('click', () => {
//     // This retrieves our data from local storage and stores it into favorites variable.
//     let favorites = getLocalStorage();


//     // Clears getFavoritesDiv so the Array display will not constantly repeat.
//     getFavoritesDiv.textContent = "";
//     // Map through each element in our array
//     favorites.map(digimonName => {
//         // Creating a P-tag Dynamically
//         let p = document.createElement('p');
//         //Setting its text content to digiName
//         p.textContent = digiName;

//         // className replaces all classes with our new classes
//         p.className = "text-lg font-medium text-gray-900 dark:text-white";
//         let button = document.createElement('button');
//         button.type = "button"
//         button.textContent = "X";
//         // classList allows us to be a little more concise it doesn't replace all class
//         button.classList.add(
//             "text-gray-400",
//             "bg-transparent",
//             "hover:bg-gray-200",
//             "hover:text-gray-900",
//             "rounded-lg",
//             "text-sm",
//             "w-8",
//             "h-8",
//             "justify-end",
//             "dark:hover:bg-gray-600",
//             "dark:hover:text-white"
//         );

//         // Creating an addEventListener for our button which removes  digiName from our favorites
//         button.addEventListener('click', ()=> {
//             removeFromLocalStorage(digiName);
//             p.remove();
//         })

//         // Appending our button to our p-tag
//         p.append(button);
//         // Appending our p-tag to our FavoritesDiv
//         getFavoritesDiv.append(p);
//     })
// })

// // https://digimon-api.vercel.app/api/digimon