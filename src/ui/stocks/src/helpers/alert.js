import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorAlert = ({ errorCode, errorMessage }) => {
  let variant = '';
  let message = '';

  // Determine alert variant and message based on error code
  switch (errorCode) {
    case 201:
      variant = 'success';
      message = 'User created';
      break;
    case 400:
      variant = 'danger';
      message = errorMessage || 'Bad Request';
      break;
    case 409:
      variant = 'danger';
      message = errorMessage || 'Conflict';
      break;
    case 429:
      variant = 'warning';
      message = 'Too Many Requests';
      break;
    case 500:
      variant = 'danger';
      message = 'Some unexpected error';
      break;
    default:
      variant = 'primary';
      message = 'Unknown error';
      break;
  }

  if (errorCode && variant && message) {
    return (
      <Alert variant={variant}>
        {message}
      </Alert>
    );
  } else {
    return null;
  }
};

export default ErrorAlert;
