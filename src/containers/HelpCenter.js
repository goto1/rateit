import React from "react";
import { Formik } from "formik";
import Yup from "yup";
import { isSubmissionDisabled } from "../utils/FormUtils";
import {
  Button,
  ContentBlock,
  ContentBlockTitle,
  InputElement,
  List,
  NavCenter,
  NavLeft,
  Navbar,
  Textarea
} from "../components/f7";
import { Page } from "framework7-react";

export let ContactForm = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values
}) => {
  const disableSubmission = isSubmissionDisabled({
    isSubmitting,
    errors,
    touched
  });
  return (
    <form onSubmit={handleSubmit}>
      <List inset>
        <InputElement
          icon="info"
          name="title"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Title..."
          type="text"
          valid={errors.title && touched.title && false}
          value={values.title}
        />
        <Textarea
          icon="comment"
          name="message"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Your message here..."
          valid={errors.message && touched.message && false}
          value={values.message}
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
          Submit
        </Button>
      </ContentBlock>
    </form>
  );
};

ContactForm = Formik({
  mapPropsToValues: props => ({
    title: "",
    message: ""
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required(),
    message: Yup.string().required()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    console.log(values);
  }
})(ContactForm);

export const Content = () =>
  <div>
    <Navbar>
      <NavLeft backLink="Back" sliding />
      <NavCenter sliding>Help Center</NavCenter>
    </Navbar>
    <ContentBlockTitle>Contact form</ContentBlockTitle>
    <ContactForm />
  </div>;

const HelpCenter = () =>
  <Page>
    <Content />
  </Page>;

export default HelpCenter;
