import React, { } from 'react'
import ReactDOM from 'react-dom'
import CalcService from './calc.service'

describe('teste do CalcService', () => {
    const [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalcService();
    it('deve garantir que 1 + 4 = 5', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    })
    it('deve garantir que 1 - 4 = -3', () => {
        let sub = calcular(1, 4, SUBTRACAO);
        expect(sub).toEqual(-3);
    })
    it('deve garantir que 1 * 4 = 4', () => {
        let mult = calcular(1, 4, MULTIPLICACAO);
        expect(mult).toEqual(4);
    })
    it('deve garantir que 1 / 4 = 0.25', () => {
        let div = calcular(1, 4, DIVISAO);
        expect(div).toEqual(0.25);
    })
    it('deve retornar 0 para operacao invalida', () => {
        let opinv = calcular(1, 4, '$');
        expect(opinv).toEqual(0);
    })
})