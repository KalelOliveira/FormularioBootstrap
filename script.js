const cep = document.getElementById("cep")
cep.addEventListener("keyup", CEPINHO)

function CEPINHO(k){
    var v = k.target.value.replace(/\D/g,"")
    v = v.replace(/^(\d{5})(\d{3})/, "$1-$2")
    k.target.value = v
}