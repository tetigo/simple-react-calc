import { useState } from 'react';
import './calc.css';
import {
  Jumbotron, Container, Row, Col, Button, Form
} from 'react-bootstrap';


function Calc() {

  const [txtNumeros, setTxtNumeros] = useState('0');

  const opera = (op) => {
    setTxtNumeros(op)
  }

  const addNumber = (n) => {
    setTxtNumeros(txtNumeros + n);
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
            <Button variant="danger">C</Button>
          </Col>
          <Col xs='9'>
            <Form.Control type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readOnly"
              value={txtNumeros} />
          </Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('7')}>7</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('8')}>8</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('9')}>9</Button></Col>
          <Col><Button variant='warning' onClick={() => opera('/')}>/</Button></Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('4')}>4</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('5')}>5</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('6')}>6</Button></Col>
          <Col><Button variant='warning' onClick={() => opera('*')}>*</Button></Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('1')}>1</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('2')}>2</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('3')}>3</Button></Col>
          <Col><Button variant='warning' onClick={() => opera('-')}>-</Button></Col>
        </Row>

        <Row>
          <Col><Button variant='light' onClick={() => addNumber('0')}>0</Button></Col>
          <Col><Button variant='light' onClick={() => addNumber('.')}>.</Button></Col>
          <Col><Button variant='success'>=</Button></Col>
          <Col><Button variant='warning' onClick={() => opera('+')}>+</Button></Col>
        </Row>


      </Container>
    </Jumbotron>
  );
}

export default Calc;
