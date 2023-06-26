import { Col, Row, } from 'reactstrap';
import ClothingCard from './ClothingCard';
import { selectAllMens } from './mensSlice';
//import {MENS} from '../../app/shared/MENS';

const MensList = () => {
    const mens = selectAllMens();

    return (     
        <Row className="ms-auto">
            {mens.map((men) => {
                return (
                    <Col md="5" className="m-4" key={men.id} >
                        <ClothingCard men={men} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default MensList;