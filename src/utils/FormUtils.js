import { isEmpty, isEqual } from "lodash";

export const isSubmissionDisabled = ({ isSubmitting, errors, touched }) =>
  isSubmitting ||
  Object.keys(errors).length !== 0 ||
  Object.keys(touched).length === 0;

export const shouldDisableSubmission = ({
  isSubmitting,
  errors,
  touched,
  values,
  initialValues
}) =>
  isSubmitting ||
  !isEmpty(errors) ||
  isEmpty(touched) ||
  isEqual(values, initialValues);

export const isInputFieldValid = (name, { touched, errors }) =>
  !touched[name] ? true : errors[name] ? false : true;

export const isFormFieldValid = (name, { touched, errors }) =>
  !touched[name] ? true : errors[name] ? false : true;
