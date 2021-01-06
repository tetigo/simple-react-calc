function CalcService() {
    const SOMA = '+'
    const SUBTRACAO = '-'
    const MULTIPLICACAO = '*'
    const DIVISAO = '/'

    function calcular(a, b, op) {
        function roundToTwo(num) {
            return +(Math.round(num + "e+2") + "e-2");
        }
        let total = null
        switch (op) {
            case SOMA: total = a + b; break;
            case SUBTRACAO: total = a - b; break;
            case MULTIPLICACAO: total = a * b; break;
            case DIVISAO: total = a / b; break;
            default: total = 0;
        }
        return roundToTwo(total);
    }

    function concatenaNumero(numAtual, numConcat) {
        //caso contenha apenas 0 ou null, reinicia o valor
        if (numAtual === 0 || numAtual === '0' || numAtual === null) {
            numAtual = '';
        }

        //caso primeiro digito for '.', concatena 0 antes do ponto
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }
        //caso '.' digitado e já contenha um ponto, apenas retorna
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }
        return numAtual + numConcat;
    }


    return [calcular, concatenaNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO];
}

export default CalcService;
