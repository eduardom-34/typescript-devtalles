import { getPokemon } from "./generics/get-pokemos";
import { Pokemon } from './interfaces/pokemon';


getPokemon( 4 )
    .then( pokemon => console.log ( pokemon.sprites.front_default ))
    .catch( error => console.error( error ))
    .finally( () => console.log('Fin de getPokemon'))