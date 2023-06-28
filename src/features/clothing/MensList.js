import { Col, Row, } from 'reactstrap';
import ClothingCard from './ClothingCard';
import { selectAllMens } from './mensSlice';

const MensList = ({ setMenId }) => {
    const mens = selectAllMens();

    return (     
        <Row className="ms-auto">
            {mens.map((men) => {
                return (
                    <Col 
                        md="5" 
                        className="m-4" 
                        key={men.id} 
                        onClick={() => setMenId(men.id)}>
                        <ClothingCard men={men} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default MensList;