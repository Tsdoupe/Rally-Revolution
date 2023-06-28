import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectMenById } from '../features/clothing/mensSlice';
import MensDetail from '../features/clothing/MensDetail';
import {MensReviewsList} from '../features/reviews/ReviewsList';

const MensDetailPage = () => {
    const { menId } = useParams();
    const men = selectMenById(menId);

    return (
        <Container>
            <Row>
                <MensDetail men={men} />
                <MensReviewsList menId={menId} />
            </Row>
        </Container>
    );
};

export default MensDetailPage;