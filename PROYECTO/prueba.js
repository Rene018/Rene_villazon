let palabras = ['perro', 'luna']
let intentosMaximos = 8;
let intentosFa = 0;
let letrasCorrectas = [];
let letrasIncorrectas = []
let numero = 0
let palabra = seleccionarPalabra()
let finDelJuego = false;
let $erroneas= document.querySelector('#erroneas')
let $contaGrap= document.querySelector('#contaGrap')

function seleccionarPalabra() {
    numero = Math.floor(Math.random() * palabras.length)
    return palabras[numero];
}
function dibujarAhorcado() {
    if (intentosFa > 0) {
        let lineas= document.querySelector(`#line-${intentosFa}`)
        lineas.classList.add('visible');
        console.log('dibujando');
    }
}
function mostrarintentos() {
    
    $erroneas.innerHTML=""
    letrasIncorrectas.forEach(element => {

        $erroneas.innerHTML+= `<li>${element}</li>`
    });
}
function mostrarAciertos() {
    for (let index = 0; index < palabra.length; index++) {
        $contaGrap.innerHTML+= `<div id="contaGrap-${index}"></div>`
    }
}
function llenarAciertos() {
    let $contaGrap_element = document.querySelector(`#contaGrap-${index}`)
    $contaGrap_element.innerHTML= element
}

function recorrerPalabra(letra) {
    if ((letrasCorrectas.includes(letra)) || (letrasIncorrectas.includes(letra))) {

    } else {
        for (let index = 0; index < palabra.length; index++) {
            const element = palabra[index];
            if (element == letra) {
                let $contaGrap_element = document.querySelector(`#contaGrap-${index}`)
                $contaGrap_element.innerHTML= element

            } else {
                if (!letrasIncorrectas.includes(letra) && !palabra.includes(letra)) {
                    letrasIncorrectas.push(letra)
                    intentosFa += 1
                }

            }

        }
        console.log(letrasCorrectas);
        console.log(letrasIncorrectas);
    }

}
function removv() {
    if (intentosFa>0) {
        for (let index = 1; index < intentosFa; index++) {
           let lineas= document.querySelector('.visible')
            lineas.classList.remove('visible');
          console.log('eliminando')
            
        }
    }
    }

function validarIntento() {
    mostrarintentos()
    mostrarAciertos()
    finDelJuego=false
    if (letrasCorrectas.length == palabra.length) {
        console.log('gano');
        palabras.splice(numero,1)
        palabra = seleccionarPalabra()
        intentosMaximos = 8;
        removv()
        intentosFa = 0;
        letrasCorrectas = [];
        letrasIncorrectas = []
        finDelJuego = true
        
    }
    if (intentosFa == intentosMaximos-1) {
        console.log('perdio');
        palabras.splice(numero,1)
        palabra = seleccionarPalabra()
        intentosMaximos = 8;
        removv()
        intentosFa = 0;
        letrasCorrectas = [];
        letrasIncorrectas = []
        finDelJuego = true
        
    }
    if (intentosFa < intentosMaximos && finDelJuego == false) {
        dibujarAhorcado()
        $contaGrap=""
    }
}
document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        var $entrada = document.getElementById("entrada").value;
        
        recorrerPalabra($entrada)
        validarIntento()
        console.log(intentosFa);
        document.getElementById("formulario").reset();
    }
});