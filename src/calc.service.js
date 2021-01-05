function CalcService() {
    const SOMA = '+'
    const SUBTRACAO = '-'
    const MULTIPLICACAO = '*'
    const DIVISAO = '/'

    function calcular(a, b, op) {
        let total = null
        switch (op) {
            case SOMA: total = a + b; break;
            case SUBTRACAO: total = a - b; break;
            case MULTIPLICACAO: total = a * b; break;
            case DIVISAO: total = a / b; break;
            default: total = 0;
        }
        return total;
    }

    return [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO];
}

export default CalcService;
