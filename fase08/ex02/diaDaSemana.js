function diaDaSemana (data) { 
    var datajs = data.slice(3,5) + "/" + data.slice(0,2) + "/" + data.slice(6) ;
    var a = new Date (datajs);
    var b = a.getDay();
    var diasDaSemana = {
    0: "Domingo",
    1: "Segunda-feira",
    2: "Terça-feira",
    3: "Quarta-Feira",
    4: "Quinta-feira",
    5: "Sexta-feira",
    6: "Sábado"
    };
    return diasDaSemana[b];
}