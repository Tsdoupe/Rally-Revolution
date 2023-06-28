import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectMenById } from '../features/clothing/mensSlice';
import MensDetail from '../features/clothing/MensDetail';

const MensDetailPage = () => {
    const { menId } = useParams();
    const men = selectMenById(menId);

    return (
        <Container>
            <Row>
                <MensDetail men={men} />
            </Row>
        </Container>
    );
};

export default MensDetailPage;