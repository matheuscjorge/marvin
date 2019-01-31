function meuNome (obj) {
    return obj.nome.toUpperCase().slice(0,1)+ obj.nome.slice(1,obj.length).toLowerCase();
}