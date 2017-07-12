import React from "react";
import SmartSelect from "../SmartSelect";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import "jest-enzyme";

const props = {
  name: "schools",
  options: [
    {
      id: "bruHy",
      name: "New Jersey Institute of Technology, Newark",
      abbreviation: "NJIT"
    },
    {
      id: "5y7fh",
      name: "Rutgers University, New Brunswick",
      abbreviation: "RU"
    }
  ],
  selected: ["bruHy"],
  searchbarPlaceholder: "Search for schools...",
  onChange: jest.fn()
};

describe("SmartSelect component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SmartSelect {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls a function with selection changes", () => {
    const { onChange } = props;
    const wrapper = shallow(<SmartSelect {...props} />);

    wrapper.find("select").simulate("change");
    expect(onChange.mock.calls.length).toBe(1);
  });
});
