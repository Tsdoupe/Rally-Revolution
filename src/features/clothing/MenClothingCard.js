import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

const MenClothingCard = ({ men }) => {
    const {id, image, name} = men;

    // if (!props.clothing) {
    //     return null;
    // }
    return (
        <Link to={`${id}`} >
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle> {name} </CardTitle>
                </CardImgOverlay>
            </Card>        
        </Link>

    );
};

export default MenClothingCard;
