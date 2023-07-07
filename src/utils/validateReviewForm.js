export const validateReviewForm = (values) => {
    const errors = {};

    if (!values.rating) {
        errors.rating = 'Required'
    }

    if (!values.author) {
        errors.author = 'Required';
    } else if (values.author.length < 2) {
        errors.author = 'Not a valid name'
    } else if (values.author.length > 15) {
        errors.author = 'Must be less than 15 characters'
    }

    if (!values.reviewText) {
        errors.reviewText = 'Required'
    }

    return errors;
}