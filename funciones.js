function validar(texto) {
    if (texto == "") {
        alert("Texto vacio"); return false;
    }
    if (/[A-Z]/.test(texto)) {
        alert("No debe usar letras mayusculas"); return false;
    }
    if (/[^a-z\s]/.test(texto)) {
        alert ("Solo minusculas"); return false;
    }
    return true;
}

// Funciones para remplazar letras
function encriptarTxt(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptarTxt(texto) {
  return texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function encriptar()
{
alert("Encriptar");

if (validar (form1.mensajeorig.value)) form1.mensajeenc.value=encriptarTxt(form1.mensajeorig.value);
return true;
}

function desencriptar()
{
alert("Desencriptar");

form1.mensajeorig.value=desencriptarTxt(form1.mensajeenc.value);

return true;
}


function Clipboard() {
    alert ("Copiando al clipboard")
    navigator.clipboard.writeText(form1.mensajeenc.value);
    return true;
  }
  
  



