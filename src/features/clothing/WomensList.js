import { Col, Row, } from 'reactstrap';
import ClothingCard from './ClothingCard';
import { selectAllWomens } from './womensSlice';

const WomensList = () => {
    const womens = selectAllWomens();

    return (     
        <Row className="ms-auto">
            {womens.map((women) => {
                return (
                    <Col md="5" className="m-4" key={women.id} >
                        <ClothingCard women={women} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default WomensList;