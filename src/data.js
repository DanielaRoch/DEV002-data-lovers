import data from './data/pokemon/pokemon.js';

export function listarPokemon(region) {
  return data.pokemon.filter(p => p.generation.name === region);
}

export function ordenarPor(seleccion, filtrados) {
  if ("aZOrder" === seleccion) {
    return filtrados.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if ("zAOrder" === seleccion) {
    return filtrados.sort((a, b) => b.name.localeCompare(a.name));
  }
  else if ("numAsc" === seleccion) {
    return filtrados.sort((a, b) => a.num - b.num);
  }
  else if ("numDes" === seleccion) {
    return filtrados.sort((a, b) => b.num - a.num);
  }
}

export function porTipo(seleccion, filtrados) {
  return filtrados.filter(p => p.type.includes(seleccion));
}

export function debilidades(seleccion, filtrados) {
  return filtrados.filter(p => p.weaknesses.includes(seleccion));
}

export function resistencia(seleccion, filtrados) {
  return filtrados.filter(p => p.resistant.includes(seleccion));
}

export function datagrafica(){
  let tipos = [{}];
  for (let index = 0; index < data.pokemon.length; index++) {
    const cadaPokemon = data.pokemon[index];
    for (let index = 0; index < cadaPokemon.type.length; index++) {
      const pomkemonType = cadaPokemon.type[index];
      let temporal = tipos.filter(t => t.type === pomkemonType);
      if (temporal.length === 0) {
        tipos.push({type: pomkemonType, cantidad: 1});
      } else {
        tipos[tipos.indexOf(temporal[0])].cantidad += 1;
      } 
    }
  }
  return tipos;
}
  



