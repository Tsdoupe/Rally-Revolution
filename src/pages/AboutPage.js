import {Col, Row, Container} from 'reactstrap';
import SubHeader from '../components/SubHeader';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3> Our Mission</h3>
                    <p>
                    Statement will be here. Whatever Brandon wants in this spot
                    </p>
                </Col>
                <Col sm='6'>
                    We can fill this space with a picture or something of your choice.
                    As well as add more content below if you'd like. Your call.
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;