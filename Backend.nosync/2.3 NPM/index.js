import generateName from "sillyname";
import superheroes from 'superheroes';
// var generateName = require ("sillyname");
let name = generateName();
let newName = superheroes.random();
console.log(`I Am ${newName}`);