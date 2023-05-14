function encriptar() {
    var texto = document.getElementById("area-texto-uno").value;
    var resultado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("area-texto-dos").value = resultado;
  }
  
  function desencriptar() {
    var texto = document.getElementById("area-texto-uno").value;
    var resultado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("area-texto-dos").value = resultado;
  }
  
  
  function valida_caracteres(){

  }
  