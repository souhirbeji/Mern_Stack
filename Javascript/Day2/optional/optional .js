const { log } = require("console");

const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
// // 1 : get an array where id is divisible by 3 
const div=pokémon.filter(item=>item.id %3 ===0);
console.log(div);
// // 2: get an array ojects that type are fire 
 const type=pokémon.filter(pokémon=>pokémon.types[0] ==="fire") // we used types[0]5tr its in the index 0 first case of table .
console.log(type);
//3 we will get the arrays that have 2 types or more 
const morethanone =pokémon.filter(item=>item.types.length>1);
console.log(morethanone);
//4 an array with just the names of the pokémon
const pokémonNames = pokémon.map(item=>item.name);
console.log(pokémonNames);
//an array with just names of pokémon with an if greater than 99 
const greaterthan=pokémon.filter(item=>item.id>99);
console.log(greaterthan);
//an array where the type is poison 
const poisonName=pokémon.filter(item=>item.types.length==1 && item.types[0]=="poison").map(item=>item.name);
console.log(poisonName);
const Names=pokémon.map(item=>item.id).filter(elt=>elt>99)
console.log(Names);
//an array containing 2 types and taking the first one 
const flyingpokémon=pokémon.filter(item=>item.types[1]==="flying").map(elt=>elt.types[0]);
console.log(flyingpokémon)
// count number of pokemons who have "normal type" 
const arrayofNormal=pokémon.filter(item=>item.types.includes("normal")).length//how many normal 3anna trajaalek chiffre hethi haka 
console.log(arrayofNormal);