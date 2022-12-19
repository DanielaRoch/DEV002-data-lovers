import {
  listarPokemon,
  ordenarPor,
  porTipo,
  debilidades,
  resistencia,
  datagrafica,
} from "./data.js";
import data from './data/pokemon/pokemon.js';

// Se crean constantes para manipular el DOM//

//Vistas pantallas//
const headerViewOne = document.getElementsByClassName("divViewHeaderOne")[0];
const headerViewTwo = document.getElementsByClassName("divViewHeaderTwo")[0];
//Botones Regiones//
const bKanto = document.getElementById("bKanto");
const bJohto = document.getElementById("bJohto");
//Cards//
const divLista = document.getElementById("listaPokemon");
//Filtros//
const botonOrdenarPor = document.getElementById("botonOrdenarPor");
const botonTipo = document.getElementById("botonTipo");
const botonDebilidades = document.getElementById("botonDebilidades");
const botonResistencia = document.getElementById("botonResistencia");
const selectResistencia = document.getElementById("botonResistencia");
const selectOrdenarPor = document.getElementById("botonOrdenarPor");
const selectDebilidades = document.getElementById("botonDebilidades");
const selectTipo = document.getElementById("botonTipo");
//Refrescar//
const botonBorrarFiltros = document.getElementById("borrarFiltros");

// Ponemos vista dos como None para que no se muestre//
headerViewTwo.style.display = "none";

//Guarda Pokemon filtrados//
let filtrados;

//Guarda la region a la que se ingresa//
let regiones;

//Llamamos funcion listarPokemon para cada region//
bKanto.addEventListener("click", () => {
  headerViewOne.style.display = "none";
  headerViewTwo.style.display = "block";
  filtrados = listarPokemon("kanto", data.pokemon);
  pintarLista();
  regiones = "kanto";
});
bJohto.addEventListener("click", () => {
  headerViewOne.style.display = "none";
  headerViewTwo.style.display = "block";
  filtrados = listarPokemon("johto", data.pokemon);
  pintarLista();
  regiones = "johto";
});

//Llamamos funciones para los filtros//
botonOrdenarPor.addEventListener("change", () => {
  filtrados = ordenarPor(botonOrdenarPor.value, filtrados);
  pintarLista();
});
botonTipo.addEventListener("change", () => {
  filtrados = porTipo(botonTipo.value, filtrados);
  pintarLista();
});
botonDebilidades.addEventListener("change", () => {
  filtrados = debilidades(botonDebilidades.value, filtrados);
  pintarLista();
});
botonResistencia.addEventListener("change", () => {
  filtrados = resistencia(botonResistencia.value, filtrados);
  pintarLista();
});

//Usamos el valor defaul de los filtros para Refrescarlos con el Boton borrar Filtros// 
botonBorrarFiltros.addEventListener("click", () => {
  headerViewOne.style.display = "none";
  headerViewTwo.style.display = "block";
  filtrados = listarPokemon(regiones, data.pokemon);
  pintarLista();
  selectResistencia.value = "defaultRes";
  selectOrdenarPor.value = "defaultOption";
  selectDebilidades.value = "defaultDeb";
  selectTipo.value = "defaultTipe";
});

// Añade la Card de cada Pokemon//
let pokemon = (nombre, numero, tipo, imagen) => {
  return `<div class="contenedor">
    <div class="pokemon">
      <img src="${imagen}" class="imagen" />
    </div>
      <div class="contenido">
        <h4>${nombre}</h4>
        <h4>#${numero}</h4>
        <h5>${tipo}</h5>
      </div>      
  </div>`;
};

//Creamos funcion flecha//
let pintarLista = () => {
  //Limpia la lista de Pokemon//
  divLista.innerHTML = "";
  // Agrega nuevamente los pokemon a la lista//
  for (let index = 0; index < filtrados.length; index++) {
    //Trae los pokemon de uno en uno = element//
    const element = filtrados[index];
    divLista.innerHTML += pokemon(
      element.name,
      element.num,
      element.type,
      element.img
    );
  }
};

// Gráfica//
const tipospokemon = datagrafica(data.pokemon);
let labelsTipos = tipospokemon.map((tipo) => {
  return tipo.type;
});
let cantidades = tipospokemon.map((tipo) => {
  return tipo.cantidad;
});

var ctx = document.getElementById("myChart").getContext("2d");
export const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labelsTipos,
    datasets: [
      {
        label: "CANTIDAD DE POKÉMON POR TIPO",
        data: cantidades,
        backgroundColor: [
          "rgb(120,200,80)",
          "rgb(176,88,160)",
          "rgb(240,80,48)",
          "rgb(152,168,240)",
          "rgb(56,153,248)",
          "rgb(168,184,32)",
          "rgb(168,160,144)",
          "rgb(248,208,48)",
          "rgb(234,214,164)",
          "rgb(160,80,56)",
          "rgb(248,112,160)",
          "rgb(184,160,88)",
          "rgb(88,200,224)",
          "rgb(96,96,176)",
          "rgb(160,80,56)",
          "rgb(231,159,231)",
          "rgb(122,88,72)",
          "rgb(168,168,192)",
        ],
        borderWidth: 1,
      },
    ],
  },
});
