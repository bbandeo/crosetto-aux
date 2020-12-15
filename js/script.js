$(document).ready(() => {
  // CARGA PESTAÑA SIMPLE AUTOMATICAMENTE
  $('.nav-tabs a[href="#simple"]').tab("show");

  // GET STANDARDVALUES
  let macros = values[0].medidas;
  let tabAlto = values[1].pestana_alto;
  let tabAncho = values[2].pestana_ancho;
  let tabLargo = values[3].pestana_largo;
  // WRITE STANDARDVALUES ON DOCUMENT
  document.getElementById("largo_m").value = macros.largo_m;
  document.getElementById("largo_s").value = macros.largo_m;
  document.getElementById("ancho_m").value = macros.ancho_m;
  document.getElementById("ancho_s").value = macros.ancho_m;
  document.getElementById("alto_m").value = macros.alto_m;
  document.getElementById("alto_s").value = macros.alto_m;
  document.getElementById("altopallet_m").value = macros.altopallet_m;
  document.getElementById("altopallet_s").value = macros.altopallet_m;
  document.getElementById("altopallet_t").value = macros.altopallet_m;
  document.getElementById("s_altopallet_t").value = macros.altopallet_m;
  // PESTAÑA ALTO
  document.getElementById("qsuperior").value = tabAlto.qsuperior;
  document.getElementById("s_qsuperior").value = tabAlto.qsuperior;
  document.getElementById("vanopiso").value = tabAlto.vanopiso;
  document.getElementById("s_vanopiso").value = tabAlto.vanopiso;
  document.getElementById("vanotecho").value = tabAlto.vanotecho;
  document.getElementById("s_vanotecho").value = tabAlto.vanotecho;
  // PESTAÑA ANCHO
  document.getElementById("anchopallet").value = tabAncho.anchopallet;
  document.getElementById("s_anchopallet").value = tabAncho.anchopallet;
  document.getElementById("qancho").value = tabAncho.qancho;
  document.getElementById("s_qancho").value = tabAncho.qancho;
  document.getElementById("vanoadelante").value = tabAncho.vanoadelante;
  document.getElementById("s_vanoadelante").value = tabAncho.vanoadelante;
  document.getElementById("vanoatras").value = tabAncho.vanoatras;
  document.getElementById("s_vanoatras").value = tabAncho.vanoatras;
  // PESTAÑA LARGO
  document.getElementById("largopallet").value = tabLargo.largopallet;
  document.getElementById("s_largopallet").value = tabLargo.largopallet;
  document.getElementById("qprof").value = tabLargo.qprof;
  document.getElementById("s_qprof").value = tabLargo.qprof;
  document.getElementById("vanoposterior").value = tabLargo.vanoposterior;
  document.getElementById("s_vanoposterior").value = tabLargo.vanoposterior;
  document.getElementById("vanopasillo").value = tabLargo.vanopasillo;
  document.getElementById("s_vanopasillo").value = tabLargo.vanopasillo;

  calcularMultiprof();
  calcularSimple();

  // CAMBIAR IMAGEN() SIMPLE O DOBLE
  $("input:radio[name=tipoAlmacen]").click(function () {
    let nroTrans = document.getElementById("transelevadores_s").value;
    let value = $(this).val();
    let image_name;
    if (value == "Simple") {
      image_name = "img/transSimple.png";
      document.getElementById("profundidad_s").value = nroTrans * 2;
    } else {
      if (value == "Doble") {
        image_name = "img/transDoble.png";
        document.getElementById("profundidad_s").value = nroTrans * 4;
      } else {
        image_name = "img/transmult.png";
      }
    }
    $("#simpledoble").attr("src", image_name);
  });
});

$(document).keydown(function (event) {
  if (event.keyCode == 27) {
    $("#popup").hide();
    $("#s_popup").hide();
  }
});

function redondear(cantidad, decimales) {
  var cantidad = parseFloat(cantidad);
  var decimales = parseFloat(decimales);
  decimales = !decimales ? 2 : decimales;
  return Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales);
}

function getValuesMultiprof() {
  let values = {};
  // CALLES - LARGO
  values.calles = parseFloat(document.getElementById("calles_m").value);
  values.largo = parseFloat(document.getElementById("largo_m").value);
  values.vanoAdelante = parseFloat(document.getElementById("vanoadelante").value);
  values.vanoAtras = parseFloat(document.getElementById("vanoatras").value);
  values.vanoLargo = values.vanoAtras + values.vanoAdelante;
  values.anchoPallet = parseFloat(document.getElementById("anchopallet").value);
  values.vanoCalle = parseFloat(document.getElementById("qancho").value);
  values.anchoCalle = values.anchoPallet + values.vanoCalle;
  // NIVELES - ALTO
  values.niveles = parseFloat(document.getElementById("niveles_m").value);
  values.alto = parseFloat(document.getElementById("alto_m").value);
  values.altoPallet = parseFloat(document.getElementById("altopallet_m").value);
  values.holguraSuperior = parseFloat(document.getElementById("qsuperior").value);
  values.vanoTecho = parseFloat(document.getElementById("vanotecho").value);
  values.vanoPiso = parseFloat(document.getElementById("vanopiso").value);
  values.vanoAlto = values.vanoTecho + values.vanoPiso;
  // PROFUNDIDADES - ANCHO
  values.profundidades = parseFloat(document.getElementById("profundidad_m").value);
  values.ancho = parseFloat(document.getElementById("ancho_m").value);
  values.holguraProf = parseFloat(document.getElementById("qprof").value);
  values.largoPallet = parseFloat(document.getElementById("largopallet").value);
  values.profundidadPos = values.largoPallet + values.holguraProf;
  values.vanoPosterior = parseFloat(document.getElementById("vanoposterior").value);
  values.vanoPasillo = parseFloat(document.getElementById("vanopasillo").value);
  values.vanoAncho = values.vanoPasillo + values.vanoPosterior * 2;
  return values;
}

function calcularMultiprof() {
  const v = getValuesMultiprof();
  let niveles = Math.floor((v.alto - v.vanoAlto) / (v.altoPallet + v.holguraSuperior));
  let profundidades = Math.floor((v.ancho - v.vanoAncho) / v.profundidadPos);
  let calles = Math.floor((v.largo - v.vanoLargo) / v.anchoCalle);
  let posiciones = Math.floor(calles * niveles * profundidades);
  document.getElementById("calles_m").value = calles;
  document.getElementById("niveles_m").value = niveles;
  document.getElementById("profundidad_m").value = profundidades;
  document.getElementById("posiciones_m").value = posiciones;
}

function calcularDimensionesMultiprof() {
  const v = getValuesMultiprof();
  let largo = redondear(parseFloat(v.calles * v.anchoCalle + v.vanoLargo), 2);
  let alto = redondear(parseFloat(v.niveles * (v.altoPallet + v.holguraSuperior) + v.vanoAlto), 2);
  let ancho = redondear(parseFloat(v.profundidades * v.profundidadPos + v.vanoAncho), 2);
  document.getElementById("largo_m").value = largo;
  document.getElementById("ancho_m").value = ancho;
  document.getElementById("alto_m").value = alto;
  calcularMultiprof();
}

function calcularAlturaMultiprof() {
  let alturaPallet = document.getElementById("altopallet_t").value;
  document.getElementById("altopallet_m").value = alturaPallet;
  calcularDimensionesMultiprof();
}
function calcularAnchoMultiprof() {
  let alturaPallet = document.getElementById("altopallet_t").value;
  document.getElementById("altopallet_m").value = alturaPallet;
  calcularDimensionesMultiprof();
}
function calcularLargoMultiprof() {
  let alturaPallet = document.getElementById("altopallet_t").value;
  document.getElementById("altopallet_m").value = alturaPallet;
  calcularDimensionesMultiprof();
}

function getValuesSimple() {
  let values = {};
  // CALLES - LARGO
  values.calles = parseFloat(document.getElementById("calles_s").value);
  values.largo = parseFloat(document.getElementById("largo_s").value);
  values.vanoAdelante = parseFloat(document.getElementById("s_vanoadelante").value);
  values.vanoAtras = parseFloat(document.getElementById("s_vanoatras").value);
  values.vanoLargo = values.vanoAtras + values.vanoAdelante;
  values.anchoPallet = parseFloat(document.getElementById("s_anchopallet").value);
  values.vanoCalle = parseFloat(document.getElementById("s_qancho").value);
  values.anchoCalle = values.anchoPallet + values.vanoCalle;
  // NIVELES - ALTO
  values.niveles = parseFloat(document.getElementById("niveles_s").value);
  values.alto = parseFloat(document.getElementById("alto_s").value);
  values.altoPallet = parseFloat(document.getElementById("altopallet_s").value);
  values.holguraSuperior = parseFloat(document.getElementById("s_qsuperior").value);
  values.vanoTecho = parseFloat(document.getElementById("s_vanotecho").value);
  values.vanoPiso = parseFloat(document.getElementById("s_vanopiso").value);
  values.vanoAlto = values.vanoTecho + values.vanoPiso;
  // PROFUNDIDADES - ANCHO
  values.profundidades = parseFloat(document.getElementById("profundidad_s").value);
  values.ancho = parseFloat(document.getElementById("ancho_s").value);
  values.holguraProf = parseFloat(document.getElementById("s_qprof").value);
  values.largoPallet = parseFloat(document.getElementById("s_largopallet").value);
  values.profundidadPos = values.largoPallet + values.holguraProf;
  values.vanoPosterior = parseFloat(document.getElementById("s_vanoposterior").value);
  values.vanoPasillo = parseFloat(document.getElementById("s_vanopasillo").value);
  values.vanoAncho = values.vanoPasillo + values.vanoPosterior * 2;
  values.transelevadores = document.getElementById("transelevadores_s").value;
  return values;
}

function calcularSimple() {
  const v = getValuesSimple();
  let profs = 0;
  let i = 0;
  let tipoElegido = $("input[name=tipoAlmacen]:checked", "#tipo").val();
  if (tipoElegido == "Simple") {
    profs = 2;
  } else if (tipoElegido == "Doble") {
    profs = 4;
  }
  // COMPROBAR ANCHO Y PROFUNDIDADES FONDO PASILLO MAS PASILLO
  let anchoEquipo = profs * v.profundidadPos + v.vanoAncho;
  if (v.ancho < anchoEquipo) {
    alert("Ancho mínimo insuficiente, el equipo abarca " + anchoEquipo + "mts.");
  }
  // CANTIDAD DE EQUIPOS
  while (i * anchoEquipo < v.ancho+0.1) {
    i++;
  }
  let equipos = i - 1;
  let niveles = Math.floor((v.alto - v.vanoAlto) / (v.altoPallet + v.holguraSuperior));
  let calles = Math.floor((v.largo - v.vanoLargo) / v.anchoCalle);
  let profundidades = profs * equipos;
  let posiciones = Math.floor(calles * niveles * profundidades);
  document.getElementById("transelevadores_s").value = equipos;
  document.getElementById("calles_s").value = calles;
  document.getElementById("niveles_s").value = niveles;
  document.getElementById("profundidad_s").value = profundidades;
  document.getElementById("posiciones_s").value = posiciones;
}

function calcularDimensionesSimple() {
  const v = getValuesSimple();
  let profs = 0;
  let i = 0;
  let tipoElegido = $("input[name=tipoAlmacen]:checked", "#tipo").val();
  if (tipoElegido == "Simple") {
    profs = 2;
  } else if (tipoElegido == "Doble") {
    profs = 4;
  }
  let anchoEquipo = profs * v.profundidadPos + v.vanoAncho;
  let largo = redondear(parseFloat(v.calles * v.anchoCalle + v.vanoLargo), 2);
  let alto = redondear(parseFloat(v.niveles * (v.altoPallet + v.holguraSuperior) + v.vanoAlto), 2);
  let ancho = redondear(parseFloat(anchoEquipo * v.transelevadores), 2);
  document.getElementById("largo_s").value = largo;
  document.getElementById("ancho_s").value = ancho;
  document.getElementById("alto_s").value = alto;
  calcularMultiprof();
}


function calcularAlturaSimple() {
  let alturaPallet = document.getElementById("s_altopallet_t").value;
  document.getElementById("altopallet_s").value = alturaPallet;
  calcularDimensionesSimple();
}
function calcularAnchoSimple() {
  let alturaPallet = document.getElementById("s_altopallet_t").value;
  document.getElementById("altopallet_s").value = alturaPallet;
  calcularDimensionesSimple();
}
function calcularLargoSimple() {
  let alturaPallet = document.getElementById("s_altopallet_t").value;
  document.getElementById("altopallet_s").value = alturaPallet;
  calcularDimensionesSimple();
}