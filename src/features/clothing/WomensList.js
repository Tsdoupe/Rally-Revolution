import { Col, Row, } from 'reactstrap';
import WomenClothingCard from './WomenClothingCard';
import { selectAllWomens } from './womensSlice';

const WomensList = () => {
    const womens = selectAllWomens();

    return (     
        <Row className="ms-auto">
            {womens.map((women) => {
                return (
                    <Col 
                        md="5" 
                        className="m-4" 
                        key={women.id} 
                    >
                        <WomenClothingCard women={women} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default WomensList;