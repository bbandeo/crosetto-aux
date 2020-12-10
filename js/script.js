$(document).ready(() => {
  let macros = values[0].medidas;
  let tabAlto = values[1].pestana_alto;
  let tabAncho = values[2].pestana_ancho;
  let tabLargo = values[3].pestana_largo;
  // MACROS
  document.getElementById("largo_m").value = macros.largo_m;
  document.getElementById("ancho_m").value = macros.ancho_m;
  document.getElementById("alto_m").value = macros.alto_m;
  document.getElementById("altopallet_m").value = macros.altopallet_m;
  document.getElementById("altopallet_t").value = macros.altopallet_m;
  // PESTAÑA ALTO
  document.getElementById("qsuperior").value = tabAlto.qsuperior;
  document.getElementById("vanopiso").value = tabAlto.vanopiso;
  document.getElementById("vanotecho").value = tabAlto.vanotecho;
  // PESTAÑA ANCHO
  document.getElementById("anchopallet").value = tabAncho.anchopallet;
  document.getElementById("qancho").value = tabAncho.qancho;
  document.getElementById("vanoadelante").value = tabAncho.vanoadelante;
  document.getElementById("vanoatras").value = tabAncho.vanoatras;
  // PESTAÑA LARGO
  document.getElementById("largopallet").value = tabLargo.largopallet;
  document.getElementById("qprof").value = tabLargo.qprof;
  document.getElementById("vanoposterior").value = tabLargo.vanoposterior;
  document.getElementById("vanopasillo").value = tabLargo.vanopasillo;


 
  calcularMultiprof();

  $(".calcular2").click(() => {
    calcularDimensionesMultiprof();
  });

  $(".calcular3").click(() => {
    calcularMultiprof();
  });
});

function redondear(cantidad, decimales) {
  var cantidad = parseFloat(cantidad);
  var decimales = parseFloat(decimales);
  decimales = !decimales ? 2 : decimales;
  return (
    Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales)
  );
}

function calcularMultiprof() {
   // CALLES - LARGO
  let largo = parseFloat(document.getElementById("largo_m").value);
  let vanoAdelante = parseFloat(document.getElementById("vanoadelante").value);
  let vanoAtras = parseFloat(document.getElementById("vanoatras").value);
  let vanoLargo = vanoAtras + vanoAdelante;
  let anchoPallet = parseFloat(document.getElementById("anchopallet").value);
  let vanoCalle = parseFloat(document.getElementById("qancho").value);
  let anchoCalle = anchoPallet + vanoCalle;
  let calles = Math.floor((largo - vanoLargo) / anchoCalle);
  // NIVELES - ALTO
  let alto = parseFloat(document.getElementById("alto_m").value);
  let altoPallet = parseFloat(document.getElementById("altopallet_m").value);
  let holguraSuperior = parseFloat(document.getElementById("qsuperior").value);
  let vanoTecho = parseFloat(document.getElementById("vanotecho").value);
  let vanoPiso = parseFloat(document.getElementById("vanopiso").value);
  let vanoAlto = vanoTecho + vanoPiso;
  let niveles = Math.floor((alto - vanoAlto) / (altoPallet + holguraSuperior));
  // PROFUNDIDADES - ANCHO  
  let ancho = parseFloat(document.getElementById("ancho_m").value);
  let holguraProf = parseFloat(document.getElementById("qprof").value);
  let largoPallet = parseFloat(document.getElementById("largopallet").value);
  let profundidadPos = largoPallet + holguraProf;
  let vanoPosterior = parseFloat(document.getElementById("vanoposterior").value);
  let vanoPasillo = parseFloat(document.getElementById("vanopasillo").value);
  let vanoAncho = vanoPasillo + (vanoPosterior * 2);
  let profundidades = Math.floor((ancho - vanoAncho) / profundidadPos);
  // POSICIONES
  let posiciones = Math.floor(calles * niveles * profundidades);

  document.getElementById("calles_m").value = calles;
  document.getElementById("niveles_m").value = niveles;
  document.getElementById("profundidad_m").value = profundidades;
  document.getElementById("posiciones_m").value = posiciones;
}

function calcularDimensionesMultiprof() {


  // let niveles = parseFloat(document.getElementById("niveles_m").value);
  let altopallet = parseFloat(document.getElementById("altopallet_m").value);
  let anchocalle = parseFloat(document.getElementById("anchoCalle").value);
  // let profundidadPos = parseFloat(document.getElementById("profPos").value);
  
  
  let calles = parseFloat(document.getElementById("calles_m").value);
  let anchoPallet = parseFloat(document.getElementById("anchopallet").value);
  let vanoCalle = parseFloat(document.getElementById("qancho").value);
  let anchoCalle = anchoPallet + vanoCalle;
  let vanoAdelante = parseFloat(document.getElementById("vanoadelante").value);
  let vanoAtras = parseFloat(document.getElementById("vanoatras").value);
  let vanoLargo = vanoAtras + vanoAdelante;
  let largo = parseFloat(calles * anchoCalle) + vanoLargo;




  let profundidades = parseFloat(document.getElementById("profundidad_m").value);
  let holguraProf = parseFloat(document.getElementById("qprof").value);
  let largoPallet = parseFloat(document.getElementById("largopallet").value);
  let profundidadPos = largoPallet + holguraProf;
  let vanoPosterior = parseFloat(document.getElementById("vanoposterior").value);
  let vanoPasillo = parseFloat(document.getElementById("vanopasillo").value);
  let vanoAncho = vanoPasillo + (vanoPosterior * 2);
  let ancho = parseFloat(profundidades * profundidadPos) + vanoAncho;


  let niveles = parseFloat(document.getElementById("niveles_m").value);
  let altoPallet = parseFloat(document.getElementById("altopallet_m").value);
  let holguraSuperior = parseFloat(document.getElementById("qsuperior").value);
  let vanoTecho = parseFloat(document.getElementById("vanotecho").value);
  let vanoPiso = parseFloat(document.getElementById("vanopiso").value);
  let vanoAlto = vanoTecho + vanoPiso;

  let alto = parseFloat(niveles * (altoPallet + holguraSuperior) + vanoAlto);



  document.getElementById("largo_m").value = largo;
  document.getElementById("ancho_m").value = ancho;
  document.getElementById("alto_m").value = alto;
}

function calcularAlturaMultiprof() {

  // let profundidades = parseFloat(document.getElementById("profundidad_m").value);
  // let niveles = parseFloat(document.getElementById("niveles_m").value);
  // let calles = parseFloat(document.getElementById("calles_m").value);
  // let altopallet = parseFloat(document.getElementById("altopallet_m").value);
  // let anchocalle = parseFloat(document.getElementById("anchoCalle").value);


  // let profundidadPos = parseFloat(document.getElementById("profPos").value);
  // let profundidadPos = parseFloat(document.getElementById("profPos").value);
  // let profundidadPos = parseFloat(document.getElementById("profPos").value);
  // let profundidadPos = parseFloat(document.getElementById("profPos").value);
  //  [ (altura de pallet armado + holgura pallet alto) x NIVELES ] + vano piso + vano techo

  //  altura de pallet armado = ( pisos producto * altura producto ) + altura de pallet _ simple o doble



}
function calcularAnchoMultiprof() {


}
function calcularLargoMultiprof() {


}
