import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import {selectFeaturedMen } from '../clothing/mensSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';

const DisplayList = () => {
    const items = [selectFeaturedMen(), selectFeaturedPromotion()];

    return (
        <Row>
            {items.map((item, idx) => {
                return(
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;