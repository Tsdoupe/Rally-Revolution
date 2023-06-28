import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectWomenById } from '../features/clothing/womensSlice';
import WomensDetail from '../features/clothing/WomensDetail';
import {WomensReviewsList} from '../features/reviews/ReviewsList';
import SubHeader from '../components/SubHeader';

const WomensDetailPage = () => {
    const { womenId } = useParams();
    const women = selectWomenById(womenId);

    return (
        <Container>
            <SubHeader current={women.name} detail={true} />
            <Row>
                <WomensDetail women={women} />
                <WomensReviewsList womenId={womenId} />
            </Row>
        </Container>
    );
};

export default WomensDetailPage;