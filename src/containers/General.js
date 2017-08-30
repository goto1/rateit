import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSchoolsIfNeeded } from "../actions";
import { Formik } from "formik";
import Yup from "yup";
import { isSubmissionDisabled } from "../utils/FormUtils";
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

import * as API from "../utils"; // DELETE WHEN DONE TESTING

export const AccountInformation = ({
  errors,
  handleBlur,
  handleChange,
  touched,
  values
}) =>
  <div>
    <ContentBlockTitle>Account information</ContentBlockTitle>
    <List inset>
      <InputElement
        icon="email"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="example@gmail.com"
        type="email"
        valid={errors.email && touched.email && false}
        value={values.email}
      />
    </List>
  </div>;

AccountInformation.propTypes = {
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  touched: PropTypes.object,
  values: PropTypes.object
};

export const SchoolInformation = ({
  handleBlur,
  handleChange,
  handleChangeValue,
  handleMultipleSelect,
  majors,
  schools,
  values
}) =>
  <div>
    <ContentBlockTitle>School information</ContentBlockTitle>
    <ListBlock>
      <SmartSelect
        name="school"
        value={values.school}
        options={schools}
        multiple
        searchbarPlaceholder="Search for a school..."
        onChange={e => {
          handleMultipleSelect(e, handleChangeValue);
        }}
      />
      <SmartSelect
        name="major"
        value={values.major}
        options={majors}
        multiple
        searchbarPlaceholder="Search for a major..."
        onChange={e => {
          handleMultipleSelect(e, handleChangeValue);
        }}
      />
    </ListBlock>
  </div>;

SchoolInformation.propTypes = {
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangeValue: PropTypes.func,
  handleMultipleSelect: PropTypes.func,
  majors: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired,
  values: PropTypes.object
};

export const PasswordReset = ({
  errors,
  handleBlur,
  handleChange,
  touched,
  values
}) =>
  <div>
    <ContentBlockTitle>Password reset</ContentBlockTitle>
    <List inset>
      <InputElement
        icon="lock_outline"
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="New Password"
        type="password"
        valid={errors.password && touched.password && false}
        value={values.password}
      />
      <InputElement
        icon="lock_outline"
        name="password_repeated"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="New Password Repeated"
        type="password"
        valid={errors.password_repeated && touched.password_repeated && false}
        value={values.password_repeated}
      />
    </List>
  </div>;

PasswordReset.propTypes = {
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  touched: PropTypes.object,
  values: PropTypes.object
};

export let UserInformation = props => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    values
  } = props;
  const disableSubmission = isSubmissionDisabled({
    isSubmitting,
    errors,
    touched
  });
  return (
    <form onSubmit={handleSubmit}>
      <AccountInformation {...props} />
      <SchoolInformation {...props} />
      <PasswordReset {...props} />
      <List inset>
        <InputElement
          icon="lock"
          name="current_password"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Your Current Password"
          type="password"
          valid={errors.current_password && touched.current_password && false}
          value={values.current_password}
        />
      </List>
      <ContentBlock>
        <Button
          big
          color="green"
          disabled={disableSubmission}
          fill
          type="submit"
        >
          Submit Changes
        </Button>
      </ContentBlock>
    </form>
  );
};

UserInformation.propTypes = {
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangeValue: PropTypes.func,
  handleMultipleSelect: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  majors: PropTypes.array,
  schools: PropTypes.array,
  touched: PropTypes.object,
  values: PropTypes.object
};

UserInformation = Formik({
  mapPropsToValues: props => ({
    email: "",
    school: props.school,
    major: props.major,
    password: "",
    password_repeated: "",
    current_password: ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email(),
    school: Yup.array(),
    major: Yup.array(),
    password: Yup.string(),
    password_repeated: Yup.string(),
    current_password: Yup.string().required()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    console.log(values);
  }
})(UserInformation);

class General extends React.Component {
  componentDidMount() {
    this.props.fetchSchoolsIfNeeded();
  }

  fetchUserInfo = () => {
    const allSchools = API.getSchools();
    const currUser = API.getUserDetails("UArjrbxWHX");
    this.allMajors = API.getMajors();

    const t1 = currUser.schools.map(school => school.id);
    this.schools = allSchools.filter(school => t1.includes(school.id));

    this.school = this.schools.map(school => school.id);
    this.major = currUser.majors.map(major => major.id);
  };

  handleMultipleSelect = (e, handleChange) => {
    const selected = [...e.target.options]
      .filter(option => option.selected === true)
      .map(option => option.value);
    handleChange(e.target.name, selected);
  };

  getFormProps = () => {
    const { user, schools } = this.props;
    const userMajors = user ? user.majors.map(major => major.id) : [];
    const userSchools = user ? user.schools.map(school => school.id) : [];
    const allSchools =
      schools.length > 0
        ? schools.filter(school => userSchools.includes(school.id))
        : [];

    return {
      schools: allSchools,
      school: userSchools,
      major: userMajors
    };
  };

  render() {
    this.fetchUserInfo();

    console.log("getFormProps() \n", this.getFormProps());

    const formProps = {
      handleMultipleSelect: this.handleMultipleSelect,
      majors: this.allMajors,
      schools: this.schools,
      school: this.school,
      major: this.major
    };

    console.log("formProps \n", formProps);
    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Back" sliding />
          <NavCenter sliding>General</NavCenter>
        </Navbar>
        <UserInformation {...formProps} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser,
  schools: state.schools.all
});

const mapDispatchToProps = dispatch => ({
  fetchSchoolsIfNeeded: () => dispatch(fetchSchoolsIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(General);
