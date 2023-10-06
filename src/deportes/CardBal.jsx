import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import baloncesto from './baloncesto.jpg'
export const CardBal = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={baloncesto} />
      <Card.Body>
        <Card.Title>Baloncesto</Card.Title>
        <Card.Text>
         El mejor deporte del mundo.
        </Card.Text>
        <Button variant="primary">Ir a la pagina Principal</Button>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default CardBal;