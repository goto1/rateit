import React from "react";
import { Formik } from "formik";
import Yup from "yup";
import { isFormValid } from "../utils/FormUtils";
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

const AccountInformation = ({
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

const SchoolInformation = ({
  values,
  schools,
  majors,
  selectedSchools,
  selectedMajors,
  handleChange,
  handleBlur
}) =>
  <div>
    <ContentBlockTitle>School information</ContentBlockTitle>
    <ListBlock>
      <SmartSelect
        name="schools"
        value={values.schools}
        options={schools}
        selected={selectedSchools}
        multiple={true}
        searchbarPlaceholder="Search for a school..."
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <SmartSelect
        name="majors"
        value={values.majors}
        options={majors}
        selected={selectedMajors}
        multiple={true}
        searchbarPlaceholder="Search for a major..."
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </ListBlock>
  </div>;

const PasswordReset = ({ values, touched, errors, handleChange, handleBlur }) =>
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

let Form = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  const validForm = Object.keys(errors).length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <AccountInformation {...props} />
      <SchoolInformation {...props} />
      <PasswordReset {...props} />
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
          disabled={isSubmitting || !validForm}
          big
          fill
        >
          Submit Changes
        </Button>
      </ContentBlock>
    </form>
  );
};

Form = Formik({
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
})(Form);

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

  render() {
    this.fetchUserInfo();
    const formProps = {
      schools: this.schools,
      majors: this.allMajors,
      selectedSchools: this.selectedSchools,
      selectedMajors: this.selectedMajors
    };
    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Back" sliding />
          <NavCenter sliding>General</NavCenter>
        </Navbar>
        <Form {...formProps} />
      </Page>
    );
  }
}

export default General;
