import React from "react";
import {
  Button,
  ContentBlock,
  ContentBlockTitle,
  FormInput,
  List,
  Textarea
} from "../components/f7";
import { Page, Navbar } from "framework7-react";

const Help = () =>
  <Page>
    <Navbar title="Help Center" backLink="Back" sliding />
    <ContentBlockTitle>Contact form</ContentBlockTitle>
    <List inset={true}>
      <FormInput
        icon="info"
        type="text"
        name="title"
        placeholder="Title..."
        onChange={e => console.log(e.target.name, e.target.value)}
      />
      <Textarea
        icon="comment"
        name="message"
        placeholder="Your message here..."
        onChange={e => console.log(e.target.name, e.target.value)}
      />
    </List>
    <ContentBlock>
      <Button color="green" onClick={() => "onClick"} big fill>
        Submit
      </Button>
    </ContentBlock>
  </Page>;

export default Help;
