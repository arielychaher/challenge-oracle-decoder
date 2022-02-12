
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var mensajeParaEncriptar = document.querySelector("#input-texto"); // llamo al id del input donde se escribe lo que vamos a encriptar 
var mensajeEncriptado = document.querySelector("#msg"); // aca llamo el id del input donde se va a mostrar el mensaje encriptado
var btnEncriptar = document.querySelector("#btn-encriptar"); // aca asigno a una variable el id del boton encriptar para usar el evento despues 
var btnDesencriptar = document.querySelector("#btn-desencriptar"); // aca asigno a una variable el id del boton desencriptar para usar el evento despues 

function encriptar(texto){ // se crea la función encriptar y se le pasa el parámetro texto que 
    //sería lo que vamos a escribir en el primer input 
    var textoEncriptado = texto.replace("e","enter").replace("i","imes").replace("o","ober").replace("u","ufat").replace("a","ai");
     //lo que hice en la línea de arriba es que el text encriptado se = al parametro que
     // le pasamos que sería el texto a encriptar y ahi hago lo del cambio de caracteres 
     return textoEncriptado.toLowerCase();
      //retorna en mensaje encriptado con la función toLowerCase() que pone todo en minúscula 
    }

btnEncriptar.addEventListener("click", function(e){ 
    //se crea el evento del boton encriptar cuando le hacemos click, con una funcion anonima 
    e.preventDefault();
    // el parametro se lo pasamos para usar esta funcion que hace que no se resetee el formulario 
    mensajeEncriptado.value = encriptar(mensajeParaEncriptar.value);
 
    //lo de arriba seria el mensaje encriptado = a la función que creamos que como parámetro 
 //trae lo que escribimos en el primer input pero ya convertido por lo que hicimos en la función/ 
})

function desencriptar(texto){  
    var textoDesencriptado = texto.replace("enter","e").replace("imes","i").replace("ober","o").replace("ufat","u").replace("ai","a");
     return textoDesencriptado.toLowerCase();
      
    }

btnDesencriptar.addEventListener("click", function(e){ 
        e.preventDefault();
       mensajeParaEncriptar.value = desencriptar(mensajeEncriptado.value);
 
    })

    //portapeles verlo bien
    /*var btn = document.querySelector("#msg");
    btn.addEventListener("click", funcion e(){
        entrada2.foco();
        entrada2.seleccionar();
        var cont = entrada2.valor;
        navegante_portapapeles_escribirtexto(cont);
    })*/
