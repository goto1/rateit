export const isSubmissionDisabled = ({ isSubmitting, errors, touched }) =>
  isSubmitting ||
  Object.keys(errors).length !== 0 ||
  Object.keys(touched).length === 0;
