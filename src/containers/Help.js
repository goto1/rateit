import React from "react";
import {
  ContentBlockTitleWrapper,
  FormInput,
  TextArea,
  Button
} from "../components/f7";
import { Page, Navbar, List, ContentBlock } from "framework7-react";

const Help = () =>
  <Page>
    <Navbar title="Help Center" backLink="Back" sliding />
    <ContentBlockTitleWrapper>Contact form</ContentBlockTitleWrapper>
    <List inset>
      <FormInput
        icon="info"
        type="text"
        name="title"
        placeholder="Title..."
        onChange={e => console.log(e.target.name, e.target.value)}
      />
      <TextArea
        icon="comment"
        name="message"
        placeholder="Your message here..."
        onChange={e => console.log(e.target.name, e.target.value)}
      />
    </List>
    <ContentBlock>
      <Button type="success" disabled={true} onClick={e => e.preventDefault()}>
        Submit Changes
      </Button>
    </ContentBlock>
  </Page>;

export default Help;
