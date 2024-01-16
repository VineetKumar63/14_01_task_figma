import { CardBody, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards({ pic, title, content, color, border }) {
  return (
   <>
    <Card style={{ width: '28rem', border:`2px solid ${border}`, padding:'5px', borderRadius:'20px', backgroundColor:`${color}`, color:'white' }}>
            <Image variant="top" src={pic} width={90} roundedCircle/>
            <Card.Body>
                <Card.Title className='title'>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
   </>
  )
}

export default Cards