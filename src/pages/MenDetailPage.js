import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectMenById } from '../features/clothing/mensSlice';
import MensDetail from '../features/clothing/MensDetail';
import {MensReviewsList} from '../features/reviews/ReviewsList';
import SubHeader from '../components/SubHeader';

const MensDetailPage = () => {
    const { menId } = useParams();
    const men = selectMenById(menId);

    return (
        <Container>
            <SubHeader current={men.name} detail={true} />
            <Row>
                <MensDetail men={men} />
                <MensReviewsList menId={menId} />
            </Row>
        </Container>
    );
};

export default MensDetailPage;