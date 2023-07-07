import {Col } from 'reactstrap';
import Review from './Review';
import { selectReviewsByMenId, selectReviewsByWomenId} from './reviewsSlice';
import MenReviewForm from './MenReviewForm';
import WomenReviewForm from './WomenReviewForm';

export const MensReviewsList = ({ menId }) => {
    const reviews = selectReviewsByMenId(menId);

    if (reviews && reviews.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4 className='d-flex justify-content-center'> Reviews </h4>
                {reviews.map((review) => {
                    return <Review key={review.id} review={review} />;
                })}
                <MenReviewForm menId={menId} />
            </Col>
        )
    }
    return (
        <Col md='5' className='m-1'>
            <h4 className='d-flex justify-content-center'> Reviews </h4>
            <p className='d-flex justify-content-center'> There are no reviews yet. </p>
            <MenReviewForm menId={menId} />
        </Col>
    )
};

export const WomensReviewsList = ({ womenId }) => {
    const reviews = selectReviewsByWomenId(womenId);

    if (reviews && reviews.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4 className='d-flex justify-content-center'> Reviews </h4>
                {reviews.map((review) => {
                    return <Review key={review.id} review={review} />;
                })}
                <WomenReviewForm womenId={womenId} />
            </Col>
        )
    }
    return (
        <Col md='5' className='m-1'>
            <h4 className='d-flex justify-content-center'> Reviews </h4>
            <p className='d-flex justify-content-center'> There are no reviews yet. </p>
            <WomenReviewForm womenId={womenId} />
        </Col>
    )
};


// export default WomensReviewsList;
// export default MensReviewsList;