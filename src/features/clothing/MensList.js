import { Col, Row, } from 'reactstrap';
import MenClothingCard from './MenClothingCard';
import { selectAllMens } from './mensSlice';

const MensList = () => {
    const mens = selectAllMens();

    return (     
        <Row className="ms-auto">
            {mens.map((men) => {
                return (
                    <Col 
                        md="5" 
                        className="m-4" 
                        key={men.id} 
                        >
                        <MenClothingCard men={men} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default MensList;