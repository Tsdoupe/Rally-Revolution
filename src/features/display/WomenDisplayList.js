import { Col, Row } from 'reactstrap';
import DisplayCard from './MenDisplayCard';
import {selectFeaturedWomen} from '../clothing/womensSlice';
import { selectFeaturedWomensPromotion } from '../promotions/womensPromotionsSlice';

const WomenDisplayList = () => {
    const womensItems = [selectFeaturedWomen(), selectFeaturedWomensPromotion()];


    return (
        <Row>
            {womensItems.map((item, idx) => {
                return(
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default WomenDisplayList;