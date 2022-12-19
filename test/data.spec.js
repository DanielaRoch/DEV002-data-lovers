import { listarPokemon, ordenarPor, porTipo , debilidades, resistencia, datagrafica } from '../src/data';

const data =
{
  "pokemon": [{
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "grass",
      "poison"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
  },
  {
    "num": "151",
    "name": "mew",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "img": "https://www.serebii.net/pokemongo/pokemon/151.png",
    "type": [
      "psychic"
    ],
    "resistant": [
      "fighting",
      "psychic"
    ],
    "weaknesses": [
      "bug",
      "ghost",
      "dark"
    ],
  },
  {
    "num": "152",
    "name": "chikorita",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "img": "https://www.serebii.net/pokemongo/pokemon/152.png",
    "type": [
      "grass"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying"
    ],
  },
  {
    "num": "251",
    "name": "celebi",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "img": "https://www.serebii.net/pokemongo/pokemon/251.png",
    "type": [
      "psychic",
      "grass"
    ],
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "poison",
      "flying"
    ],
  }, 
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "img": "https://www.serebii.net/pokemongo/pokemon/004.png",
    "type": [
      "fire"
    ],
    "resistant": [
      "fire",
      "grass",
      "ice",
      "bug",
      "steel"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
  }]
};



describe('Pruebas para la funcion Filtro por región', () => {
  it('Validar que listarPokemon sea tipo funcion', () => {
    expect(typeof listarPokemon).toEqual('function');
  });

  it('validar que listarPokemon traiga la región kanto', () => {
    expect(listarPokemon('kanto', data.pokemon).length).toEqual(3);
  })

  it('validar que listarPokemon traiga la región johto', () => {
    expect(listarPokemon('johto', data.pokemon).length).toEqual(2);
  });
});

describe('Pruebas para la función ordenar',() => {
  it('Validar que ordene correctamente de la A - Z', () => {
    expect(ordenarPor('aZOrder', data.pokemon)[0].name).toEqual('bulbasaur');
    expect(ordenarPor('aZOrder', data.pokemon)[data.pokemon.length-1].name).toEqual('mew');
  });

  it('Validar que ordene correctamente de la Z - A', () => {
    expect(ordenarPor('zAOrder',data.pokemon)[0].name).toEqual('mew');
    expect(ordenarPor('zAOrder', data.pokemon)[data.pokemon.length-1].name).toEqual('bulbasaur');
  });

  it('Validar que ordene correctamente de la #ASC - #DESC', () => {
    expect(ordenarPor('numAsc',data.pokemon)[0].num).toEqual('001');
    expect(ordenarPor('numAsc', data.pokemon)[data.pokemon.length-1].num).toEqual('251');
  });

  it('Validar que ordene correctamente de la #DESC - #ASC', () => {
    expect(ordenarPor('numDes',data.pokemon)[0].num).toEqual('251');
    expect(ordenarPor('numDes', data.pokemon)[data.pokemon.length-1].num).toEqual('001');
  });
});

describe('Pruebas para la funcion por Tipo', () => {
  it('Validar que traiga los Pokémon correctos, según el tipo seleccionado', () => {
    expect(porTipo('fire', data.pokemon).length).toEqual(1);
  });
});

describe('Pruebas para la funcion debilidades', () => {
  it('Validar que traiga los Pokémon que tengan la debilidad seleccionada', () => {
    expect(debilidades('flying', data.pokemon).length).toEqual(3);
  });
});

describe('Pruebas para la funcion resistencia', () => {
  it('Validar que traiga los Pokémon que tengan la resistencia seleccionada', () => {
    expect(resistencia('ice', data.pokemon).length).toEqual(1);
  });
});

describe('Pruebas para funcion datagrafica', () => {
  it('Validar que traiga la cantidad correcta por Tipo', () => {
    let grafica = datagrafica(data.pokemon); 
    expect(grafica.filter(d => d.type==='psychic')[0].cantidad).toEqual(2);
    expect(grafica.filter(d => d.type==='grass')[0].cantidad).toEqual(3);
    expect(grafica.filter(d => d.type==='fire')[0].cantidad).toEqual(1);
    expect(grafica.filter(d => d.type==='poison')[0].cantidad).toEqual(1);
  });
});
