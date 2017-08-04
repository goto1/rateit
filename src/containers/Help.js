import React from "react";
import { Formik } from "formik";
import Yup from "yup";
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

let Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  const invalidForm = Object.keys(errors).length !== 0;
  return (
    <form onSubmit={handleSubmit}>
      <List inset>
        <InputElement
          icon="info"
          type="text"
          name="title"
          value={values.title}
          placeholder="Title..."
          onChange={handleChange}
          onBlur={handleBlur}
          valid={errors.title && touched.title && false}
        />
        <Textarea
          icon="comment"
          name="message"
          value={values.message}
          placeholder="Your message here..."
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </List>
      <ContentBlock>
        <Button
          type="submit"
          color="green"
          disabled={isSubmitting || invalidForm}
          big
          fill
        >
          Submit
        </Button>
      </ContentBlock>
    </form>
  );
};

Form = Formik({
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
})(Form);

const Help = () =>
  <Page>
    <Navbar>
      <NavLeft backLink="Back" sliding />
      <NavCenter sliding>Help Center</NavCenter>
    </Navbar>
    <ContentBlockTitle>Contact form</ContentBlockTitle>
    <Form />
  </Page>;

export default Help;
