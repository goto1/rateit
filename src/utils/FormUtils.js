import { isEmpty, isEqual, reduce } from "lodash";

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

export const separateUserRatings = formData => {
  if (!formData) {
    return {};
  }

  const userRatings = separateFormData(
    formData,
    value => !isNaN(parseInt(value, 10))
  );
  const restOfFormData = separateFormData(formData, value =>
    isNaN(parseInt(value, 10))
  );

  function separateFormData(formData, predicate) {
    return reduce(
      formData,
      (result, value, key) => {
        const shouldInclude = predicate(value);

        if (shouldInclude) {
          result[key] = value;
        }

        return result;
      },
      {}
    );
  }

  return {
    ...restOfFormData,
    ratings: userRatings
  };
};
