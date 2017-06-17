import React from "react";
import { Page, Navbar, ContentBlock } from "framework7-react";

const About = () =>
  <Page>
    <Navbar title="About" backLink="Back" sliding />
    <ContentBlock inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, delectus,
      ut! Aspernatur incidunt laudantium nobis doloribus commodi non
      reprehenderit in doloremque animi repellendus aliquam voluptates, pariatur
      possimus, est blanditiis qui?
    </ContentBlock>
  </Page>;

const Form = () =>
  <Page>
    <Navbar title="Form" backLink="Back" sliding />
    <ContentBlock inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
      laboriosam voluptate facilis libero sint voluptates reiciendis
      necessitatibus quis nostrum quidem, autem mollitia voluptatibus iure
      dolores, incidunt deserunt, omnis esse. Reiciendis.
    </ContentBlock>
  </Page>;

const createRoute = (path, component) => ({
  path,
  component
});

const routes = [createRoute("/about/", About), createRoute("/form/", Form)];

export default routes;
