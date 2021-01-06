import { useState } from 'react';
import './calc.css';
import {
  Jumbotron, Container, Row, Col, Button, Form
} from 'react-bootstrap';
import CalcService from './calc.service'



function Calc() {
  const [calcular, concatenaNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalcService();

  const [txtNumeros, setTxtNumeros] = useState('0');
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState(null);
  const [operacao, setOperacao] = useState(null);


  const opera = (op) => {
    setOperacao(op);
  }

  const addNumber = (n) => {
    let result;
    if (operacao === null) {
      result = concatenaNumero(num1, n);
      setNum1(result);
    } else {
      result = concatenaNumero(num2, n);
      setNum2(result);
    }
    setTxtNumeros(result);
  }

  function acaoCalcular() {
    if (num2 === null) {
      return;
    }
    const result = calcular(parseFloat(num1), parseFloat(num2), operacao);
    limpar();
    setTxtNumeros(result.toString());
    setNum1(result.toString());
  }

  function limpar() {
    setNum1('0');
    setOperacao(null);
    setNum2(null);
    setTxtNumeros('0');
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px',
    }}>
      <Container>
        <Row>
          <Col xs='3'>
            <Button variant="danger" onClick={limpar}>C</Button>
          </Col>
          <Col xs='9'>
            <Form.Control type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readOnly"
              value={txtNumeros}
              data-testid="txtNumeros" />
          </Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('7')}>7</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('8')}>8</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('9')}>9</Button></Col>
          <Col><Button variant='warning' onClick={() => opera(DIVISAO)}>/</Button></Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('4')}>4</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('5')}>5</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('6')}>6</Button></Col>
          <Col><Button variant='warning' onClick={() => opera(MULTIPLICACAO)}>*</Button></Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('1')}>1</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('2')}>2</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('3')}>3</Button></Col>
          <Col><Button variant='warning' onClick={() => opera(SUBTRACAO)}>-</Button></Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('0')}>0</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('.')}>.</Button></Col>
          <Col><Button variant='success' onClick={acaoCalcular}>=</Button></Col>
          <Col><Button variant='warning' onClick={() => opera(SOMA)}>+</Button></Col>
        </Row>


      </Container>
    </Jumbotron>
  );
}

export default Calc;
