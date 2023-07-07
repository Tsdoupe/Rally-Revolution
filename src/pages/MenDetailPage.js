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
            <Row className='row-content'>
                <MensDetail men={men} />               
            </Row>
            <Row className='row-content'>
                <MensReviewsList menId={menId} />
            </Row>
        </Container>
    );
};

export default MensDetailPage;