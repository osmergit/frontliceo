import React from 'react';
import Card from 'react-bootstrap/Card';
import golf from './golf.jpg'
export const CardGolf = () => {
    return (
        <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= { golf} />
      <Card.Body>
        <Card.Title>TORNEO ABIERTO DE GOLF</Card.Title>
        <Card.Text>
          Club de Golf
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardGolf;