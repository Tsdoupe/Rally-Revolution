import {Col } from 'reactstrap';
import Review from './Review';
import { selectReviewsByMenId, selectReviewsByWomenId} from './reviewsSlice';

export const MensReviewsList = ({ menId }) => {
    const reviews = selectReviewsByMenId(menId);

    if (reviews && reviews.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4 className='d-flex justify-content-center'> Reviews </h4>
                {reviews.map((review) => {
                    return <Review key={review.id} review={review} />;
                })}
            </Col>
        )
    }
    return (
        <Col md='5' className='m-1'>
            <h4 className='d-flex justify-content-center'> Reviews </h4>
            <p className='d-flex justify-content-center'> There are no reviews yet. </p>
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
            </Col>
        )
    }
    return (
        <Col md='5' className='m-1'>
            <h4 className='d-flex justify-content-center'> Reviews </h4>
            <p className='d-flex justify-content-center'> There are no reviews yet. </p>
        </Col>
    )
};


// export default WomensReviewsList;
// export default MensReviewsList;