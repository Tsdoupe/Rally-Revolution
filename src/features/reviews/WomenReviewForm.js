import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {validateReviewForm} from '../../utils/validateReviewForm';

//could be reviewId instead for prop
const WomenReviewForm = ({womenId}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const review = {
            womenId: parseInt(womenId),
            rating: values.rating,
            author: values.author,
            text: values.reviewText
        };
        console.log(review);
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)} >
                <i className= 'fa fa-pencil fa-lg' /> Add Review
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}> Write A Review </ModalHeader>
                <ModalBody> 
                    <Formik
                        initialValues={{
                            rating: undefined,
                            author: '',
                            reviewText: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateReviewForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='rating'>
                                    Rating
                                </Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option> Select... </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </Field>
                                <ErrorMessage name='rating'>
                                    {(msg) => <p className='text-danger'> {msg} </p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>
                                    Author
                                </Label>
                                <Field 
                                    name='author'
                                    placeholder= 'Your Name'
                                    className='form-control'
                                />
                                <ErrorMessage name='author'>
                                    {(msg) => <p className='text-danger'> {msg} </p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='reviewText'>
                                    Review
                                </Label>
                                <Field 
                                    name='reviewText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                                <ErrorMessage name='reviewText'>
                                    {(msg) => <p className='text-danger'> {msg} </p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>    
                </ModalBody>
            </Modal>
        </>
    )
};

export default WomenReviewForm;