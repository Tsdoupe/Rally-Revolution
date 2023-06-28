import {Container, Row } from 'reactstrap';
import MenDisplayList from '../features/display/MenDisplayList';
import WomenDisplayList from '../features/display/WomenDisplayList';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
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