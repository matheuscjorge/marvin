function passadoOuFuturo (date) {
var today = new Date()
var datacerta = 1445385600000
if (date < datacerta)
return "Passado"
else 
return "Futuro"
}