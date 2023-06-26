import {Container, Row, Col, Button} from 'reactstrap';
import MensDetail from '../features/clothing/MensDetail';
import MensList from '../features/clothing/MensList';
import {selectRandomMen} from '../features/clothing/mensSlice';

const ClothingDirectoryPage = () => {
    const selectedMen = selectRandomMen();

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <MensList />
                </Col>
                <Col sm='7' md='5'>
                    <MensDetail men={selectedMen} />
                </Col>
            </Row>
        </Container>
    );
};

export default ClothingDirectoryPage;