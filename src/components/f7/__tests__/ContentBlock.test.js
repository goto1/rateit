import React from "react";
import ContentBlock from "../ContentBlock";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

describe("ContentBlock component", () => {
  const Content = <div>Lorem ipsum dolor sit amet</div>;

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ContentBlock>
          {Content}
        </ContentBlock>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with an `inset` style class", () => {
    const wrapper = shallow(
      <ContentBlock inset={true}>
        {Content}
      </ContentBlock>
    );
    expect(wrapper).toHaveClassName("inset");
  });

  it("renders without an `inset` style class", () => {
    const wrapper = shallow(
      <ContentBlock>
        {Content}
      </ContentBlock>
    );
    expect(wrapper).not.toHaveClassName("inset");
  });
});
