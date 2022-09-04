import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./footer.css"
function Footer() {
  return (
    <Card className="text-center">
      <Card.Header >Footer</Card.Header>
      <Card.Body>
        <Card.Title className='sad'>ALL COPYRIGHTS RESERVED Ⓒ</Card.Title>
        <Button className='but' href='https://www.canada.ca/en.html' variant="primary">Canadian Official WebSite</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2022</Card.Footer>
    </Card>
  );
}

export default Footer;