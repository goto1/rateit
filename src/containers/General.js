import React from "react";
import { Formik } from "formik";
import Yup from "yup";
import {
  Button,
  ContentBlock,
  ContentBlockTitle,
  InputElement,
  List,
  ListBlock,
  NavCenter,
  NavLeft,
  Navbar,
  SmartSelect
} from "../components/f7";
import { Page } from "framework7-react";

// DELETE AFTER TESTING
import * as API from "../utils";

export const EmailFormField = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur
}) =>
  <div>
    <ContentBlockTitle>Account information</ContentBlockTitle>
    <List inset>
      <InputElement
        icon="email"
        type="email"
        name="email"
        value={values.email}
        placeholder="example@gmail.com"
        onChange={handleChange}
        onBlur={handleBlur}
        valid={errors.email && touched.email && false}
      />
    </List>
  </div>;

export const SchoolInfoFormFields = ({
  handleBlur,
  handleChange,
  handleChangeValue,
  handleMultipleSelect,
  majors,
  schools,
  selectedMajors,
  selectedSchools,
  values
}) =>
  <div>
    <ContentBlockTitle>School information</ContentBlockTitle>
    <ListBlock>
      <SmartSelect
        name="schools"
        value={values.schools}
        options={schools}
        selected={selectedSchools}
        multiple
        searchbarPlaceholder="Search for a school..."
        onChange={e => handleMultipleSelect(e, handleChangeValue)}
        onBlur={handleBlur}
      />
      <SmartSelect
        name="majors"
        value={values.majors}
        options={majors}
        selected={selectedMajors}
        multiple
        searchbarPlaceholder="Search for a major..."
        onChange={e => handleMultipleSelect(e, handleChangeValue)}
        onBlur={handleBlur}
      />
    </ListBlock>
  </div>;

export const PasswordResetFormFields = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur
}) =>
  <div>
    <ContentBlockTitle>Password reset</ContentBlockTitle>
    <List inset>
      <InputElement
        icon="lock_outline"
        type="password"
        name="new_password"
        value={values.new_password}
        placeholder="New Password"
        onChange={handleChange}
        onBlur={handleBlur}
        valid={errors.new_password && touched.new_password && false}
      />
      <InputElement
        icon="lock_outline"
        type="password"
        name="new_password_repeated"
        value={values.new_password_repeated}
        placeholder="New Password Repeated"
        onChange={handleChange}
        onBlur={handleBlur}
        valid={
          errors.new_password_repeated && touched.new_password_repeated && false
        }
      />
    </List>
  </div>;

export let AccountInfoForm = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  const disableSubmission =
    isSubmitting ||
    Object.keys(errors).length !== 0 ||
    Object.keys(touched).length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <EmailFormField {...props} />
      <SchoolInfoFormFields {...props} />
      <PasswordResetFormFields {...props} />
      <List inset>
        <InputElement
          icon="lock"
          type="password"
          name="current_password"
          value={values.current_password}
          placeholder="Your Current Password"
          onChange={handleChange}
          onBlur={handleBlur}
          valid={errors.current_password && touched.current_password && false}
        />
      </List>
      <ContentBlock>
        <Button
          type="submit"
          color="green"
          disabled={disableSubmission}
          big
          fill
        >
          Submit Changes
        </Button>
      </ContentBlock>
    </form>
  );
};

AccountInfoForm = Formik({
  mapPropsToValues: props => ({
    email: "",
    schools: props.selectedSchools,
    majors: props.selectedMajors,
    new_password: "",
    new_password_repeated: "",
    current_password: ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email(),
    schools: Yup.array(),
    majors: Yup.array(),
    new_password: Yup.string(),
    new_password_repeated: Yup.string(),
    current_password: Yup.string().required()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    console.log(values);
  }
})(AccountInfoForm);

class General extends React.Component {
  fetchUserInfo = () => {
    const allSchools = API.getSchools();
    const currUser = API.getUserDetails("UArjrbxWHX");
    this.allMajors = API.getMajors();

    const t1 = currUser.schools.map(school => school.id);
    this.schools = allSchools.filter(school => t1.includes(school.id));

    this.selectedSchools = this.schools.map(school => school.id);
    this.selectedMajors = currUser.majors.map(major => major.id);
  };

  handleMultipleSelect = (e, handleChange) => {
    const selected = [...e.target.options]
      .filter(option => option.selected === true)
      .map(option => option.value);
    handleChange(e.target.name, selected);
  };

  render() {
    this.fetchUserInfo();
    const formProps = {
      handleMultipleSelect: this.handleMultipleSelect,
      majors: this.allMajors,
      schools: this.schools,
      selectedMajors: this.selectedMajors,
      selectedSchools: this.selectedSchools
    };
    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Back" sliding />
          <NavCenter sliding>General</NavCenter>
        </Navbar>
        <AccountInfoForm {...formProps} />
      </Page>
    );
  }
}

export default General;
