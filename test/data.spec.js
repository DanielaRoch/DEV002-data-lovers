import { listarPokemon, ordenarPor, porTipo , debilidades, resistencia, datagrafica } from '../src/data';


describe('Pruebas para la funcion Filtro por región', () => {
  it('Validar que listarPokemon sea tipo funcion', () => {
    expect(typeof listarPokemon).toEqual('function');
  });

  it('validar que listarPokemon traiga la region kanto', () => {
    expect(listarPokemon('kanto').length).toEqual(151);
  })

  it('validar que listarPokemon traiga la region johto', () => {
    expect(listarPokemon('johto').length).toEqual(100);
  });
});

describe('Pruebas para la función ordenar',() => {
  it('Validar que ordene correctamente de la A - Z', () => {
    let pokemon = listarPokemon('kanto');
    expect(ordenarPor('aZOrder', pokemon)[0].name).toEqual('abra');
    expect(ordenarPor('aZOrder', pokemon)[pokemon.length-1].name).toEqual('zubat');
  });

  it('Validar que ordene correctamente de la Z - A', () => {
    let pokemon = listarPokemon('kanto');
    expect(ordenarPor('zAOrder',pokemon)[0].name).toEqual('zubat');
    expect(ordenarPor('zAOrder', pokemon)[pokemon.length-1].name).toEqual('abra');
  });

  it('Validar que ordene correctamente de la #ASC - #DESC', () => {
    let pokemon = listarPokemon('johto');
    expect(ordenarPor('numAsc',pokemon)[0].num).toEqual('152');
    expect(ordenarPor('numAsc', pokemon)[pokemon.length-1].num).toEqual('251');
  });

  it('Validar que ordene correctamente de la #DESC - #ASC', () => {
    let pokemon = listarPokemon('johto');
    expect(ordenarPor('numDes',pokemon)[0].num).toEqual('251');
    expect(ordenarPor('numDes', pokemon)[pokemon.length-1].num).toEqual('152');
  });
});

describe('Pruebas para la funcion por Tipo', () => {
  it('Validar que traiga los Pokémon correctos, según el tipo seleccionado', () => {
    expect(porTipo('fire', listarPokemon('kanto')).length).toEqual(12);
  });
});

describe('Pruebas para la funcion debilidades', () => {
  it('Validar que traiga los Pokémon que tengan la debilidad seleccionada', () => {
    expect(debilidades('flying', listarPokemon('kanto')).length).toEqual(32);
  });
});

describe('Pruebas para la funcion resistencia', () => {
  it('Validar que traiga los Pokémon que tengan la resistencia seleccionada', () => {
    expect(resistencia('ice', listarPokemon('kanto')).length).toEqual(44);
  });
});

fdescribe('test', () => {
  fit('testa', () => {
    console.log(datagrafica());
  })
})
