import {Container} from 'reactstrap';
import MensList from '../features/clothing/MensList';
import SubHeader from '../components/SubHeader';

const MensPage = () => {

    return (
        <Container>
            <SubHeader current='Mens' />
            <MensList />
        </Container>
    );
};

export default MensPage;