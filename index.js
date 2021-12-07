var texto = document.getElementById("texto")

var select = document.getElementById("select");

var incremento = document.getElementById("incremento")

var divIncremento = document.getElementById("divIncremento")

var radioCodificar = document.getElementById("radioCodificar")

var radioDecodificar = document.getElementById("radioDecodificar")

var btn = document.getElementById("btnEnviar")

var textoDaArea = document.getElementById("textArea")

var alfabeto = "a"

//EVENTO INCREMENTO - CONCLUIDO
select.addEventListener("change", function(){
    if (select.value === "1"){
        divIncremento.style.display = "block"
    } else {
        divIncremento.style.display = "none"
    }
})
//EVENTO INCREMENTO - CONCLUIDO

//EVENTO BOTAO - CONCLUIDO
radioCodificar.addEventListener("click", function(){
    btn.innerText = "Codificar Mensagem!"
})

radioDecodificar.addEventListener("click", function(){
    btn.innerText = "Decodificar Mensagem!"
})
//EVENTO BOTAO - CONCLUIDO

//EVENTO CODIFICAR E DECODIFICAR O BASE64 - CONCLUIDO
btn.addEventListener("click", function(e){
   e.preventDefault();
    if(radioCodificar.checked && select.value === "2"){
        
        var textoAplicado = document.getElementById("texto").value
        var textoCodificado = btoa(textoAplicado)
        textoDaArea.innerHTML = `${textoCodificado}`
    } 
    }
  
)

btn.addEventListener("click", function(e){
    e.preventDefault();
    if(radioDecodificar.checked && select.value === "2"){
        var textoAplicado = document.getElementById("texto").value
        var textoDecodificado = atob(textoAplicado)
        textoDaArea.innerHTML = `${textoDecodificado}`
    }
})
//EVENTO CODIFICAR E DECODIFICAR O BASE64 - CONCLUIDO

