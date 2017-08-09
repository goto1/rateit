import React from "react";
import SmartSelect from "../SmartSelect";
import { shallow } from "enzyme";

describe("SmartSelect component", () => {
  const getSmartSelectWrapper = () => {
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
      multiple: true,
      searchbarPlaceholder: "Search for schools...",
      onChange: jest.fn(),
      value: ["bruHy"]
    };
    return shallow(<SmartSelect {...props} />);
  };

  it("should render with 2 options", () => {
    const wrapper = getSmartSelectWrapper();
    const actual = wrapper.find("option").length;
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it("should render a specific option as selected", () => {
    const wrapper = getSmartSelectWrapper();
    const actual = wrapper.find("select").props().value[0];
    const expected = "bruHy";
    expect(actual).toBe(expected);
  });

  it("should call a function when selection changes", () => {
    const wrapper = getSmartSelectWrapper();
    wrapper.find("select").simulate("change");
    const actual = wrapper.find("select").props().onChange.mock.calls.length;
    const expected = 1;
    expect(actual).toBe(expected);
  });

  it("should render with the `multiple` property set to true", () => {
    const wrapper = getSmartSelectWrapper();
    const actual = wrapper.find("select").props().multiple;
    const expected = true;
    expect(actual).toBe(expected);
  });
});
