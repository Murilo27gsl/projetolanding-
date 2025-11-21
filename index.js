var SetaEsquerda = window.document.getElementById("seta_esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var SetaDireita = window.document.getElementById("seta_direita")

function RolarparaDireita() {
    Leonardo.style ="display: none"
    Bruna.style ="display: flex"
    SetaDireita.style ="display: none"
    SetaEsquerda.style ="display: flex; margin-top: 20%"

}

function RolarParaEsquerda(){
    Leonardo.style ="display: flex"
    Bruna.style ="display: none"
    SetaDireita.style ="display: Flex; margin-top: 20%"
    SetaEsquerda.style ="display: none"
}