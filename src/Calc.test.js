import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calc from './calc';
import { calendarFormat } from 'moment';

describe('Calculadora', () => {
  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calc />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('deve limpar o campo de números', () => {
    const { getByTestId, getByText } = render(<Calc />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('0');
  });
  it('deve somar 2 + 3 e obter 5', () => {
    const { getByTestId, getByText } = render(<Calc />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  });
  it('deve subtrair 5 - 2 e obter 3', () => {
    const { getByTestId, getByText } = render(<Calc />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('3');
  });
  it('deve multiplicar 4 * 3 e obter 12', () => {
    const { getByTestId, getByText } = render(<Calc />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('12');
  });
  it('deve dividir 6 / 3 e obter 2', () => {
    const { getByTestId, getByText } = render(<Calc />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  });
  it('deve somar 2.6 + 1.3 e obter 3.9', () => {
    const { getByTestId, getByText } = render(<Calc />);

    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('3.9');
  });
})

