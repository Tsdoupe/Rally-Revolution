import {Container, Row, Col} from 'reactstrap';

const Footer = () => {
    return (
        <div className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size:4, offset:1}} sm='2'> 
                        <h5> this will be site navigation! </h5>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5> Social </h5>
                        <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'>
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a className='btn btn-social-icon btn-facebook' href='http://www.facebook.com/'>
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/'>
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a className='btn btn-social-icon btn-google' href='http://youtube.com/'>
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                    <a role='button' className='btn btn-link' href='tel:+17162280369'>
                            <i className='fa fa-phone' /> 716-228-0369
                        </a>
                        <br />
                        <a role='button' className='btn btn-link' href='mailto:bbelles@gmail.com'>
                            <i className='fa fa-envelope-o' /> bbelles@gmail.com
                        </a>
                        </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer;