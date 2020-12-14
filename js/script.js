$(document).ready(() => {
  
  $('.nav-tabs a[href="#simple"]').tab('show');



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

  // CAMBIAR IMAGEN(es) SIMPLE O DOBLE
  $("input:radio[name=tipoAlmacen]").click(function() {
    let value = $(this).val();
    let image_name;
    if(value == 'Simple'){
        image_name = "img/transSimple.png";
    }else{
        if(value == 'Doble'){
            image_name = "img/transDoble.png";
        }else{
            image_name = "img/transmult.png";
        }
    }
     $('#simpledoble').attr('src', image_name);
  });



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
  return Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales);
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
  let vanoAncho = vanoPasillo + vanoPosterior * 2;
  let profundidades = Math.floor((ancho - vanoAncho) / profundidadPos);
  // POSICIONES
  let posiciones = Math.floor(calles * niveles * profundidades);
  document.getElementById("calles_m").value = calles;
  document.getElementById("niveles_m").value = niveles;
  document.getElementById("profundidad_m").value = profundidades;
  document.getElementById("posiciones_m").value = posiciones;
}

function calcularDimensionesMultiprof() {
  // LARGO
  let calles = parseFloat(document.getElementById("calles_m").value);
  let vanoAdelante = parseFloat(document.getElementById("vanoadelante").value);
  let vanoAtras = parseFloat(document.getElementById("vanoatras").value);
  let vanoLargo = vanoAtras + vanoAdelante;
  let anchoPallet = parseFloat(document.getElementById("anchopallet").value);
  let vanoCalle = parseFloat(document.getElementById("qancho").value);
  let anchoCalle = anchoPallet + vanoCalle;
  let largo = redondear(parseFloat(calles * anchoCalle + vanoLargo), 2);

  // ALTO
  let niveles = parseFloat(document.getElementById("niveles_m").value);
  let altoPallet = parseFloat(document.getElementById("altopallet_m").value);
  let holguraSuperior = parseFloat(document.getElementById("qsuperior").value);
  let vanoTecho = parseFloat(document.getElementById("vanotecho").value);
  let vanoPiso = parseFloat(document.getElementById("vanopiso").value);
  let vanoAlto = vanoTecho + vanoPiso;
  let alto = redondear(parseFloat(niveles * (altoPallet + holguraSuperior) + vanoAlto), 2);

  // ANCHO
  let profundidades = parseFloat(document.getElementById("profundidad_m").value);
  let holguraProf = parseFloat(document.getElementById("qprof").value);
  let largoPallet = parseFloat(document.getElementById("largopallet").value);
  let profundidadPos = largoPallet + holguraProf;
  let vanoPosterior = parseFloat(document.getElementById("vanoposterior").value);
  let vanoPasillo = parseFloat(document.getElementById("vanopasillo").value);
  let vanoAncho = vanoPasillo + vanoPosterior * 2;
  let ancho = redondear(parseFloat(profundidades * profundidadPos + vanoAncho), 2);

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

function calcularSimple() {
  let output = $('input[name=tipoAlmacen]:checked', '#tipo').val(); 
  console.log(output);
}
function calcularDimensionesSimple() {
  


}


function calcularSimple() {
  let output = $('input[name=tipoAlmacen]:checked', '#tipo').val(); 
  console.log(output);
  let profundidades = 0;
  if (output == 'Simple') {profundidades = 2}
    else if ( output == 'Doble') {profundidades = 4}; 
  console.log(profundidades);
  // CALCULO EL ANCHO
    // let i = 0;
    // while (i*(profundidades * fondoPasillo + pasillo) < ancho) {i++}
    // for (i = 0 ; iPasillos < anchos ; i++)
    // {
    // anchoEquipo = i(4*prof+pasillo)
    //   calculusAnchus();
    // }
}












// $(document).keypress(function(e) {
//   console.log(e)
//   if(e.which == 49) {//1
//     $('.nav-tabs a[href="#multiple"]').tab('show');
//     console.log("called 1");
//   }
//   if(e.which == 50) {//2
//     console.log("called 2");
//     $('.nav-tabs a[href="#simple"]').tab('show');
//   }
// });
// function getSelectedTabIndex() { 
//   return $("#TabList").tabs('option', 'selected');
// }
// $("#TabList").tabs('option', 'active')
