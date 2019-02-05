function pessoaFisica (cpf) { 
    num = (cpf.substr(0,3) + cpf.substr(4,3) + cpf.substr(8,3) + cpf.substr(12,2));
    x = cpf.substr(3,1) + cpf.substr(7,1) + cpf.substr(11,1);
    
    if (cpf.length != 14)
        return false;
    else if (num >= "00000000000" && num <= 99999999999 && x == "..-")
        return true;
    else
        return false;
}