var texto = document.getElementById("texto")

var select = document.getElementById("select");

var incremento = document.getElementById("incremento")

var divIncremento = document.getElementById("divIncremento")

var radioCodificar = document.getElementById("radioCodificar")

var radioDecodificar = document.getElementById("radioDecodificar")

var btn = document.getElementById("btnEnviar")

var textoDaArea = document.getElementById("textArea")

var alfabeto = "abcdefghijklmnopqrstuvwxyzéáàèâêçìíòó"

//EVENTO INCREMENTO - CONCLUIDO
select.addEventListener("change", function(){
    if (select.value === "1"){
        divIncremento.style.display = "block"
    } else {
        divIncremento.style.display = "none"
    }
})
//EVENTO INCREMENTO - CONCLUIDO

//EVENTO BOTAO COD E DECOD - CONCLUIDO
radioCodificar.addEventListener("click", function(){
    btn.innerText = "Codificar Mensagem!"
})

radioDecodificar.addEventListener("click", function(){
    btn.innerText = "Decodificar Mensagem!"
})
//EVENTO BOTAO COD E DECOD - CONCLUIDO

//FUNÇÃO CODIFICAR CIFRA DE CÉSAR
function codificaCesar() {
    var textoDigitado= texto.value;
    var textoMinusculo= textoDigitado.toLowerCase();
    var textoCodificadoCifra= '';
 
    for (var i= 0; i < textoMinusculo.length; i++) {
       for (var j= 0; j < alfabeto.length; j++) {
          if (textoMinusculo [i] == alfabeto [j]) {
             textoCodificadoCifra += alfabeto[j + parseInt(incremento.value)]
             break
          } else if (textoMinusculo == ' ') {
             textoCodificadoCifra=+ ' ';
             break
          }
       
       }
    }
 
    return textoCodificadoCifra
 }

 //FUNÇÃO DECODIFICAR CIFRA DE CÉSAR
 function decodificaCesar() {
    var textoDigitado= texto.value;
    var textoMinusculo= textoDigitado.toLowerCase();
    var textoCodificadoCifra= '';
 
    for (var i= 0; i < textoMinusculo.length; i++) {
        for (var j= alfabeto.length; j >= 0; j--) {
           if (textoMinusculo [i] == alfabeto [j]) {
              textoCodificadoCifra += alfabeto[j - parseInt(incremento.value)]
              break
           } else if (textoMinusculo== ' ') {
              textoCodificadoCifra =+ ' ';
              break
           }
        
        }
     }
     return textoCodificadoCifra
  }
  
//FUNÇÕES COD/DECOD BASE64
function codBase64 (){
    let texto = document.querySelector('#texto').value
    let codificado = btoa(texto)
    return codificado
}

function deCodBase64 (){
    let texto = document.querySelector('#texto').value
    let decodificado = atob(texto)
    return decodificado
}


//EVENTO BOTAO PARA COD/DECOD CIFRA/BASE64

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(radioCodificar.checked && select.value === "2"){
        
        textoDaArea.value = codBase64();
    } else if(radioDecodificar.checked && select.value === "2"){
        
        textoDaArea.value = deCodBase64();
    } else if(radioCodificar.checked && select.value === "1"){
        
        textoDaArea.value = codificaCesar()
    } else if(radioDecodificar.checked && select.value === "1"){
        
        textoDaArea.value = decodificaCesar()
    } else{
        textoDaArea.value = "Digite novamente o texto."
    }
})

