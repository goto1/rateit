import omitBy from "lodash/omitBy";

export const isFormValid = formValues => {
  const length = Object.keys(formValues).length;
  const filledInputs = omitBy(formValues, (val, key) => val === "");
  return Object.keys(filledInputs).length === length ? true : false;
};
