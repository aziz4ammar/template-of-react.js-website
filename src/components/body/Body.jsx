import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./body.css"
const Body = ({el}) => {
  return (
    <div className='d'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Body