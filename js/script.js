$(document).ready(() => {
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
  let anchocalle = parseFloat(document.getElementById("anchoCalle").value);
  let profundidadPos = parseFloat(document.getElementById("profPos").value);
  let largo = parseFloat(document.getElementById("largo_m").value);
  let altopallet = parseFloat(document.getElementById("altopallet_m").value);
  let alto = parseFloat(document.getElementById("alto_m").value);
  let ancho = parseFloat(document.getElementById("ancho_m").value);
  let calles = Math.floor((largo - 6) / anchocalle);
  let niveles = Math.floor((alto - 2.4) / (altopallet + 0.4));
  let profundidades = Math.floor((ancho - 2.4) / profundidadPos);
  let posiciones = Math.floor(calles * niveles * profundidades);

  document.getElementById("calles_m").value = calles;
  document.getElementById("niveles_m").value = niveles;
  document.getElementById("profundidad_m").value = profundidades;
  document.getElementById("posiciones_m").value = posiciones;
}

function calcularDimensionesMultiprof() {
  let profundidades = parseFloat(
    document.getElementById("profundidad_m").value
  );
  let niveles = parseFloat(document.getElementById("niveles_m").value);
  let calles = parseFloat(document.getElementById("calles_m").value);
  let altopallet = parseFloat(document.getElementById("altopallet_m").value);
  let anchocalle = parseFloat(document.getElementById("anchoCalle").value);
  let profundidadPos = parseFloat(document.getElementById("profPos").value);

  let largo = parseFloat(calles * anchocalle) + 6;
  let ancho = parseFloat(profundidades * profundidadPos) + 2.4;
  let alto = parseFloat(niveles * (altopallet + 0.4) + 2.4);

  document.getElementById("largo_m").value = largo;
  document.getElementById("ancho_m").value = ancho;
  document.getElementById("alto_m").value = alto;
}

let medidas = {
  
}