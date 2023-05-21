function encriptar() {
 
    var texto = document.getElementById("area-texto-uno").value;
    
    var resultado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("area-texto-dos").value = resultado;
    
    document.getElementById("mensaje-off").classList.add("imagen-oculta");
    
    var firstP = document.getElementById("mensaje-on");
    firstP.setAttribute("id","cuadro-aparece");

  }
  
  function desencriptar() {
    var texto = document.getElementById("area-texto-uno").value;
    var resultado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("area-texto-dos").value = resultado;


    document.getElementById("mensaje-off").classList.add("imagen-oculta");
    
    var firstP = document.getElementById("mensaje-on");
    firstP.setAttribute("id","cuadro-aparece");
  }
  
  
  function valida_caracteres(){

  }
  