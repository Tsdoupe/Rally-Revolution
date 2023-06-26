import {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import MensDetail from '../features/clothing/MensDetail';
import MensList from '../features/clothing/MensList';
import { selectMenById } from '../features/clothing/mensSlice';

const ClothingDirectoryPage = () => {
    const [menId, setMenId] = useState(0);
    const selectedMen = selectMenById(menId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <MensList setMenId={setMenId } />
                </Col>
                <Col sm='7' md='5'>
                    <MensDetail men={selectedMen} />
                </Col>
            </Row>
        </Container>
    );
};

export default ClothingDirectoryPage;