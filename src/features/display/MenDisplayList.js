import { Col, Row } from 'reactstrap';
import MensDisplayCard from './MenDisplayCard';
import {selectFeaturedMen } from '../clothing/mensSlice';
import { selectFeaturedMensPromotion} from '../promotions/mensPromotionsSlice';

const MenDisplayList = () => {
    const mensItems = [selectFeaturedMen(), selectFeaturedMensPromotion()];

    return (
        <Row>
            {mensItems.map((item, idx) => {
                return(
                    <Col md className='m-1' key={idx}>
                        <MensDisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default MenDisplayList;