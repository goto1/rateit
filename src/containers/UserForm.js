import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import PreloaderScreen from "../components/PreloaderScreen";
import SubmittedFormScreen from "../components/SubmittedFormScreen";
import { get, isEmpty } from "lodash";
import { separateUserRatings } from "../utils/FormUtils";
import { submitRatingForm as submitForm } from "../utils/API";

const UserForm = (FormComponent, formikOptions) => {
  class _UserForm extends React.Component {
    goBack = () => {
      const props = this.props;
      const submitStatus = get(props, "status.submission", null);

      if (submitStatus && submitStatus.success) {
        props.setStatus({});
        props.resetForm();
      }

      if (submitStatus && !submitStatus.success) {
        props.setStatus({});
        props.setSubmitting(false);
      }
    };

    render() {
      const props = this.props;

      const validForm = isEmpty(props.errors);
      const disableSubmission =
        !validForm || props.isSubmitting || isEmpty(props.touched);

      const submitStatus = get(props, "status.submission", null);

      if (submitStatus && submitStatus.success) {
        return (
          <SubmittedFormScreen buttonName="Back" onClick={this.goBack}>
            Your rating was successfully submitted. Thank you!
          </SubmittedFormScreen>
        );
      }

      if (submitStatus && !submitStatus.success) {
        return (
          <SubmittedFormScreen buttonName="Back" onClick={this.goBack}>
            Looks like something went wrong! Please go back and try again.
          </SubmittedFormScreen>
        );
      }

      const formComponentProps = {
        ...this.props,
        validForm,
        disableSubmission
      };

      return props.isSubmitting ? (
        <PreloaderScreen size="big" />
      ) : (
        <FormComponent {...formComponentProps} />
      );
    }
  }

  _UserForm = Formik({
    mapPropsToValues: formikOptions.mapPropsToValues,
    validationSchema: formikOptions.validationSchema,
    handleSubmit: (values, { props, setSubmitting, setStatus }) => {
      const authUser = props.auth.info;

      const formData = separateUserRatings({
        ...values,
        authorId: authUser.userId
      });

      setSubmitting(true);

      submitForm(authUser.id, formData)
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
              error
            }
          });
        });
    }
  })(_UserForm);

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(mapStateToProps)(_UserForm);
};

export default UserForm;
