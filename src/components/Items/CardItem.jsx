import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    return (
        <Card style={{ width: 'auto' }}className='mx-2 mt-4' >
            <Card.Img variant="top" src={item.image}  style={{ height: 'auto' }} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Link to={`/detalle/${item.id}`}>
                    <Button variant="primary">Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        
    );
}

export default CardItem