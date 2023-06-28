import {Container} from 'reactstrap';
import WomensList from '../features/clothing/WomensList';
import SubHeader from '../components/SubHeader';

const WomensPage = () => {

    return (
        <Container>
            <SubHeader current='Womens' />
            <WomensList />
        </Container>
    );
};

export default WomensPage;