import { Card, CardImg, CardImgOverlay, CardTitle} from 'reacstrap';

const ClothingCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.clothing.image}
                alt={props.clothing.name}
            />
            <CardImgOverlay>
                <CardTitle> {props.clothing.name} </CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

// Need to get images of clothing Brandon wants sponsored at top of page.
// For now the code above will work until needing to add his pictures and play with the picture sizes
// Will need to create a file similar to CAMPSITES which holds array of images brandon may want at top of page

export default ClothingCard;
