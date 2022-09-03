import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./body.css"
import Stars from './Stars';
const Body = ({el}) => {
  return (
    <div className='d'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.text}</Card.Text>
        <Stars rating={el.rate}/>
        <Button className='but' variant="primary">Learn more</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Body