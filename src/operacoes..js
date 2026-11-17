//Fuçoes
//-----------QUESTÃO 1--------------------------------------

function calcularAcrescimo(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const acrescimo = valor * (percentual / 100);
    return valor + acrescimo;
}

module.exports{calcularAcrescimo}