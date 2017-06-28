import React from "react";
import {
  ContentBlockTitleCustom,
  FormInputCustom,
  TextAreaCustom,
  SubmitButtonCustom
} from "../components/f7";
import { Page, Navbar, List } from "framework7-react";

const Help = () =>
  <Page>
    <Navbar title="Help Center" backLink="Back" sliding />
    <ContentBlockTitleCustom text="Contact form" />
    <List inset>
      <FormInputCustom
        icon="info"
        type="text"
        name="title"
        placeholder="Title..."
        onChange={e => console.log(e.target.name, e.target.value)}
      />
      <TextAreaCustom
        icon="comment"
        name="message"
        placeholder="Your message here..."
        onChange={e => console.log(e.target.name, e.target.value)}
      />
    </List>
    <SubmitButtonCustom
      text="Submit"
      disabled={false}
      onClick={e => e.preventDefault()}
    />
  </Page>;

export default Help;
