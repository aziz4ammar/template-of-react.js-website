import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>ALL COPYRIGHTS RESERVED Ⓒ</Card.Title>
        <Card.Text>
          Go To The Official Canadian Website
        </Card.Text>
        <Button variant="primary">Canadian State</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2022</Card.Footer>
    </Card>
  );
}

export default Footer;