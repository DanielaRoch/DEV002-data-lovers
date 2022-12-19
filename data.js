//Funcion Filtro por region//
export function listarPokemon(region, pokemon) {
  return pokemon.filter(p => p.generation.name === region);
}

//Funcion para ordenar A-Z, Z-A, #ASC, #DESC//
export function ordenarPor(seleccion, pokemon) {
  if ("aZOrder" === seleccion) {
    return pokemon.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if ("zAOrder" === seleccion) {
    return pokemon.sort((a, b) => b.name.localeCompare(a.name));
  }
  else if ("numAsc" === seleccion) {
    return pokemon.sort((a, b) => a.num - b.num);
  }
  else if ("numDes" === seleccion) {
    return pokemon.sort((a, b) => b.num - a.num);
  }
}

//Funcion por Tipo//
export function porTipo(seleccion, pokemon) {
  return pokemon.filter(p => p.type.includes(seleccion));
}

//Funcion por debilidades//
export function debilidades(seleccion, pokemon) {
  return pokemon.filter(p => p.weaknesses.includes(seleccion));
}

//Funcion por resistencias//
export function resistencia(seleccion, pokemon) {
  return pokemon.filter(p => p.resistant.includes(seleccion));
}

//Funcion para la grafica//
export function datagrafica(pokemon){
  let tipos = [];
  //recorre el array de pokemon uno a uno//
  pokemon.forEach(cadaPokemon => {
    //recorre el array de tipo del pokemon//
    cadaPokemon.type.forEach(pokemonType => {
      let temporal = tipos.filter(t => t.type === pokemonType);
      if (temporal.length === 0) {
        tipos.push({type: pokemonType, cantidad: 1});
      } else {
        tipos[tipos.indexOf(temporal[0])].cantidad += 1;
      }
    });
  });
  return tipos;
}