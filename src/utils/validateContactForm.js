export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Not a valid name.';
    } else if (values.firstName.length > 15 ) {
        errors.firstName = 'Must be less than 15 characters.'
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Not a valid name.';
    } else if (values.lastName.length > 15 ) {
        errors.lastName = 'Must be less than 15 characters.'
    }

    const reg= /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'Not a valid phone number.'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Not a valid email address.'
    }

    return errors;
};