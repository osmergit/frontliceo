import React from 'react';
import Card from 'react-bootstrap/Card';
import nacional from './nacional.jpg'
import bucaros from './bucaros.jpeg'
import junior from './junior.jpg'
import america from './america.jpg'
export const CardFutbol = () => {
    return (
        <div>
            <table>
                <tr> 
                    <td>
     <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={ nacional } />
      <Card.Body>
        <Card.Title>Atletico Nacional</Card.Title>
        <Card.Text>
          Torneo de la copa Colombiana.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </td>
    <td>        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={ bucaros } />
      <Card.Body>
        <Card.Title>Atletico Bucaramanga</Card.Title>
        <Card.Text>
          Torneo de la copa Colombiana.
        </Card.Text>
       
      </Card.Body>
    </Card> </td>
    </tr>
    <tr>
        <td>
        <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={ junior } />
      <Card.Body>
        <Card.Title>Atletico Junior</Card.Title>
        <Card.Text>
          Torneo de la copa Colombiana.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </td>
        <td>
        <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={ america } />
      <Card.Body>
        <Card.Title>America de Cali</Card.Title>
        <Card.Text>
          Torneo de la copa Colombiana.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </td>
    </tr>
    </table>
        </div>
        
    );
};

export default CardFutbol;