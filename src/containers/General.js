import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchSchoolsIfNeeded, fetchMajorsIfNeeded } from "../actions";
import { submitGeneralForm as submitForm } from "../utils/API";
import { Formik } from "formik";
import Yup from "yup";
import get from "lodash/get";
import reduce from "lodash/reduce";
import isEqual from "lodash/isEqual";
import filter from "lodash/filter";
import isNil from "lodash/isNil";
import SubmittedFormScreen from "../components/SubmittedFormScreen";
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
  handleMultipleSelect,
  majors,
  schools,
  setFieldTouched,
  setFieldValue,
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
        onChange={e => handleMultipleSelect(e, setFieldValue, setFieldTouched)}
      />
      <SmartSelect
        name="major"
        value={values.major}
        options={majors}
        multiple
        searchbarPlaceholder="Search for a major..."
        onChange={e => handleMultipleSelect(e, setFieldValue, setFieldTouched)}
      />
    </ListBlock>
  </div>;

SchoolInformation.propTypes = {
  handleMultipleSelect: PropTypes.func,
  majors: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
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

class UserInformation extends React.Component {
  goBack = () => {
    const { status, setStatus, setSubmitting, resetForm } = this.props;
    const successfulSubmission = status.submission.success;

    if (successfulSubmission) {
      resetForm();
      setStatus({});
    } else {
      setStatus({});
      setSubmitting(false);
    }
  };

  render() {
    const { handleSubmit, isSubmitting, errors, touched } = this.props;
    const shouldDisableSubmission =
      isSubmitting ||
      Object.keys(errors).length !== 0 ||
      Object.keys(touched).length === 0;
    const successfulSubmission = get(
      this.props,
      "status.submission.success",
      null
    );

    if (successfulSubmission) {
      return (
        <SubmittedFormScreen buttonName="Back" onClick={this.goBack}>
          Your account information was changed successfully!
        </SubmittedFormScreen>
      );
    }

    if (successfulSubmission === false) {
      return (
        <SubmittedFormScreen buttonName="Back" onClick={this.goBack}>
          Looks like something went wrong! Please go back and try again.
        </SubmittedFormScreen>
      );
    }

    return (
      <form onSubmit={handleSubmit}>
        <AccountInformation {...this.props} />
        <SchoolInformation {...this.props} />
        <PasswordReset {...this.props} />
        <ContentBlock>
          <Button
            big
            color="green"
            disabled={shouldDisableSubmission}
            fill
            type="submit"
          >
            Submit Changes
          </Button>
        </ContentBlock>
      </form>
    );
  }
}

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
    password_repeated: ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email(),
    school: Yup.array(),
    major: Yup.array(),
    password: Yup.string(),
    password_repeated: Yup.string()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting, setStatus }) => {
    const userId = props.userId;
    const formData = filter(
      {
        ...values,
        major: !isEqual(values.major, props.major) ? values.major : null,
        school: !isEqual(values.school, props.school) ? values.school : null
      },
      item => (item === "" ? false : isNil(item) ? false : true)
    );

    setSubmitting(true);

    submitForm(userId, formData)
      .then(response => {
        setStatus({
          submission: {
            success: true,
            error: ""
          }
        });
      })
      .catch(error => {
        setStatus({
          submission: {
            success: false,
            error: "Could not submit the form."
          }
        });
      });
  }
})(UserInformation);

class General extends React.Component {
  componentDidMount() {
    this.props.fetchSchoolsIfNeeded();
    this.props.fetchMajorsIfNeeded();
  }

  handleMultipleSelect = (e, setFieldValue, setFieldTouched) => {
    const { name, options } = e.target;
    const selected = [...options]
      .filter(option => option.selected === true)
      .map(option => option.value);

    setFieldValue(name, selected);
    setFieldTouched(name, true);
  };

  getFormProps = () => {
    const { user, schools, majors } = this.props;
    const userMajors = user ? user.majors.map(major => major.id) : [];
    const userSchools = user ? user.schools.map(school => school.id) : [];
    const allSchools =
      schools.all.length > 0
        ? schools.all.filter(school => userSchools.includes(school.id))
        : [];
    const allMajors = majors.all.length > 0 ? majors.all : [];

    return {
      major: userMajors,
      majors: allMajors,
      school: userSchools,
      schools: allSchools,
      userId: user.id
    };
  };

  render() {
    const formProps = this.getFormProps();
    const isDoneLoading = reduce(
      formProps,
      (res, val, key) => res && val.length !== 0,
      true
    );

    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Back" sliding />
          <NavCenter sliding>General</NavCenter>
        </Navbar>
        {isDoneLoading &&
          <UserInformation
            handleMultipleSelect={this.handleMultipleSelect}
            {...formProps}
          />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser,
  schools: state.schools,
  majors: state.majors
});

const mapDispatchToProps = dispatch => ({
  fetchSchoolsIfNeeded: () => dispatch(fetchSchoolsIfNeeded()),
  fetchMajorsIfNeeded: () => dispatch(fetchMajorsIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(General);
