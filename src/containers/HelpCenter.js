import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Formik } from "formik";
import Yup from "yup";
import { connect } from "react-redux";
import get from "lodash/get";
import PreloaderScreen from "../components/PreloaderScreen";
import SubmittedFormScreen from "../components/SubmittedFormScreen";
import FormFieldLabel from "../components/FormFieldLabel";
import * as FormUtils from "../utils/FormUtils";
import * as API from "../utils/API";
import {
  Button,
  ContentBlock,
  InputElement,
  List,
  NavCenter,
  NavLeft,
  Navbar,
  Textarea
} from "../components/f7";
import { Page } from "framework7-react";

const StyledList = styled(List)`
  margin-top: 15px !important;
`;

class ContactForm extends React.Component {
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
    const props = { ...this.props };
    const { errors, touched, values } = props;
    const disableSubmission = FormUtils.shouldDisableSubmission(props);
    const titleFieldValid = FormUtils.isInputFieldValid("title", {
      touched,
      errors
    });
    const messageFieldValid = FormUtils.isInputFieldValid("message", {
      touched,
      errors
    });
    const validFormFields = titleFieldValid && messageFieldValid;
    const submitStatus = get(props, "status.submission", null);

    if (submitStatus && submitStatus.success) {
      return (
        <SubmittedFormScreen buttonName="Back" onClick={this.goBack}>
          Your message was successfully sent. We'll get back to you as soon as
          possible.
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

    return props.isSubmitting
      ? <PreloaderScreen size="big" />
      : <div>
          <FormFieldLabel
            description="Contact form"
            error="Both fields need to be filled"
            valid={validFormFields}
          />
          <form onSubmit={props.handleSubmit}>
            <StyledList inset>
              <InputElement
                icon="info"
                name="title"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                placeholder="Title..."
                type="text"
                valid={titleFieldValid}
                value={values.title}
              />
              <Textarea
                icon="comment"
                name="message"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                placeholder="Your message here..."
                valid={messageFieldValid}
                value={values.message}
              />
            </StyledList>
            <ContentBlock>
              <Button
                big
                color="green"
                disabled={disableSubmission}
                fill
                type="submit"
              >
                Submit
              </Button>
            </ContentBlock>
          </form>
        </div>;
  }
}

ContactForm.propTypes = {
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  status: PropTypes.object,
  touched: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired
};

ContactForm = Formik({
  mapPropsToValues: props => ({
    title: props.initialValues.title,
    message: props.initialValues.message
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required(),
    message: Yup.string().required()
  }),
  handleSubmit: (values, { props, setSubmitting, setStatus }) => {
    const userId = props.user.id;

    setSubmitting(true);

    API.submitContactForm(userId, values)
      .then(response => {
        console.log(response);
        setStatus({
          submission: {
            success: true,
            error: ""
          }
        });
      })
      .catch(error => {
        console.log(error);
        setStatus({
          submission: {
            success: false,
            error
          }
        });
      });
  }
})(ContactForm);

const Container = styled.div`height: 100% !important;`;

export let Content = props => {
  const updatedProps = {
    ...props,
    initialValues: {
      title: "",
      message: ""
    }
  };
  return (
    <Container>
      <Navbar>
        <NavLeft backLink="Back" sliding />
        <NavCenter sliding>Help Center</NavCenter>
      </Navbar>
      <ContactForm {...updatedProps} />
    </Container>
  );
};

Content.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.authUser
});

Content = connect(mapStateToProps)(Content);

const HelpCenter = () =>
  <Page>
    <Content />
  </Page>;

export default HelpCenter;
