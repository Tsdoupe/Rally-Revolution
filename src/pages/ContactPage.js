import {Container, Row, Col} from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />
            <Row className='row-content'>
                <Col xs='12'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
};

export default ContactPage;