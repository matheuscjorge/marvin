function passadoOuFuturo (date) {
var today = new Date()
var datacerta = 1440115200000
if (date < datacerta)
return "Passado"
else 
return "Futuro"
}