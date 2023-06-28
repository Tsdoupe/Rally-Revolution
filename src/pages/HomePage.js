import {Container, Row } from 'reactstrap';
import MenDisplayList from '../features/display/MenDisplayList';
import WomenDisplayList from '../features/display/WomenDisplayList';

const HomePage = () => {
    return (
        <Container>
            <Row>
            <MenDisplayList />                
            </Row>
            <Row>
            <WomenDisplayList />
            </Row>
        </Container>

    );
};

export default HomePage;