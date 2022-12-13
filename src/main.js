import {
  listarPokemon,
  ordenarPor,
  porTipo,
  debilidades,
  resistencia,
  datagrafica,
} from "./data.js";

const headerViewOne = document.getElementsByClassName("divViewHeaderOne")[0];
const headerViewTwo = document.getElementsByClassName("divViewHeaderTwo")[0];
const bKanto = document.getElementById("bKanto");
const bJohto = document.getElementById("bJohto");
const divLista = document.getElementById("listaPokemon");
const botonOrdenarPor = document.getElementById("botonOrdenarPor");
const botonTipo = document.getElementById("botonTipo");
const botonDebilidades = document.getElementById("botonDebilidades");
const botonResistencia = document.getElementById("botonResistencia");
const botonBorrarFiltros = document.getElementById("borrarFiltros");
const selectResistencia = document.getElementById("botonResistencia");
const selectOrdenarPor = document.getElementById("botonOrdenarPor");
const selectDebilidades = document.getElementById("botonDebilidades");
const selectTipo = document.getElementById("botonTipo");

bKanto.addEventListener("click", () => {
  headerViewOne.style.display = "none";
  headerViewTwo.style.display = "block";
  filtrados = listarPokemon("kanto");
  pintarLista();
  regiones = "kanto";
});
bJohto.addEventListener("click", () => {
  headerViewOne.style.display = "none";
  headerViewTwo.style.display = "block";
  filtrados = listarPokemon("johto");
  pintarLista();
  regiones = "johto";
});
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
botonBorrarFiltros.addEventListener("click", () => {
  headerViewOne.style.display = "none";
  headerViewTwo.style.display = "block";
  filtrados = listarPokemon(regiones);
  pintarLista();
  selectResistencia.value = "defaultRes";
  selectOrdenarPor.value = "defaultOption";
  selectDebilidades.value = "defaultDeb";
  selectTipo.value = "defaultTipe";
});

headerViewTwo.style.display = "none";
let filtrados;
let regiones;

// Por cada pokemon añade el return
let pokemon = (nombre, numero, tipo, imagen) => {
  return `<div class="contenedor">
    <div class="pokemon">
      <img src="${imagen}" class="imagen" />
      <div class="contenido">
        <h4>${nombre}</h4>
        <h4>#${numero}</h4>
        <h5>${tipo}</h5>
      </div>      
    </div>
  </div>`;
};

let pintarLista = () => {
  // Limpia la lista de pokemoms
  divLista.innerHTML = "";
  // Agrega nuevamente los pokemon a la lista
  for (let index = 0; index < filtrados.length; index++) {
    //Trae cada pokemon de uno en uno = element
    const element = filtrados[index];
    divLista.innerHTML += pokemon(
      element.name,
      element.num,
      element.type,
      element.img
    );
  }
};

/*let tarjetas = document.getElementsByClassName("contenedor");
console.log(tarjetas);
tarjetas.forEach((card) => {
  console.log(card);
  card.addEventListener("click", () => {
    console.log("se hace click");
  });
});*/

// Grafica//
const tipospokemon = datagrafica();
let labelsTipos = tipospokemon.map((tipo) => {
  return tipo.type;
});
let cantidades = tipospokemon.map((tipo) => {
  return tipo.cantidad;
});

var ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labelsTipos,
    datasets: [
      {
        label: "Cantidad por tipo",
        data: cantidades,
        backgroundColor: [
          "rgb(168,168,192)",
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
          " rgb(96,96,176)",
          "rgb(160,80,56)",
          "rgb(231,159,231)",
          "rgb(122,88,72)",
        ],
        borderWidth: 1,
      },
    ],
  },
});
