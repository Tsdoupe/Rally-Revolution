import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectWomenById } from '../features/clothing/womensSlice';
import WomensDetail from '../features/clothing/WomensDetail';
import {WomensReviewsList} from '../features/reviews/ReviewsList';

const WomensDetailPage = () => {
    const { womenId } = useParams();
    const women = selectWomenById(womenId);

    return (
        <Container>
            <Row>
                <WomensDetail women={women} />
                <WomensReviewsList womenId={womenId} />
            </Row>
        </Container>
    );
};

export default WomensDetailPage;