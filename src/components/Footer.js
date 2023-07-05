import {Container, Row, Col} from 'reactstrap';
import {Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size:4, offset:1}} sm='2'> 
                        {/* <h5> Links </h5> */}
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'> Home </Link>
                            </li>
                            <li>
                                <Link to='/about'> About Us </Link>
                            </li>
                            <li>
                                <Link to='/contact'> Contact </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='5' sm='5' className='text-center mt-3'>
                        {/* <h5> Social </h5> */}
                        <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'>
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a className='btn btn-social-icon btn-facebook' href='http://www.facebook.com/'>
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a className='btn btn-social-icon btn-google' href='http://tiktok.com/'>
                            <i className='fab fa-tiktok' />
                        </a>
                    </Col>
                    <Col xs='block' sm='4' className='text-center ms-auto d-none d-sm-block'>
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