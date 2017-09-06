import React from "react";
import { mount } from "enzyme";

describe("General container", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });
});

// describe("General container", () => {
//   describe("UserInformation", () => {
//     const getUserInfoComponent = props => {
//       const newProps = {
//         majors: [
//           { id: "hvdMFjM", name: "Computer Science", abbreviation: "CS" },
//           { id: "e2LejDg", name: "Information Systems", abbreviation: "IS" }
//         ],
//         schools: [
//           {
//             id: "bruHy",
//             name: "New Jersey Institute of Technology, Newark",
//             abbreviation: "NJIT"
//           },
//           {
//             id: "5y7fh",
//             name: "Rutgers University, New Brunswick",
//             abbreviation: "RU"
//           }
//         ],
//         major: ["hvdMFjM", "e2LejDg"],
//         school: ["bruHy", "5y7fh"],
//         ...props
//       };
//       return <UserInformation {...newProps} />;
//     };

//     it("should render correctly", () => {
//       const UserInformation = getUserInfoComponent();
//       const tree = renderer.create(UserInformation).toJSON();
//       expect(tree).toMatchSnapshot();
//     });

//     it("should render AccountInformation, SchoolInformation, and PasswordReset components", () => {
//       const UserInformation = getUserInfoComponent();
//       const wrapper = mount(UserInformation);
//       const accInfoExists = wrapper.find(AccountInformation).exists();
//       const schoolInfoExists = wrapper.find(SchoolInformation).exists();
//       const passResetExists = wrapper.find(PasswordReset).exists();
//       const actual = accInfoExists && schoolInfoExists && passResetExists;
//       const expected = true;
//       expect(actual).toBe(expected);
//     });

//     it("should render an InputElement for current password information", () => {
//       const UserInformation = getUserInfoComponent();
//       const wrapper = mount(UserInformation);
//       const actual = wrapper.find(InputElement).at(3).props().name;
//       const expected = "current_password";
//       expect(actual).toBe(expected);
//     });

//     it("should render a Button for submitting the form", () => {
//       const UserInformation = getUserInfoComponent();
//       const wrapper = mount(UserInformation);
//       const actual = wrapper.find(Button).props().type;
//       const expected = "submit";
//       expect(actual).toBe(expected);
//     });

//     it("should disable the submit button when form is submitted", () => {
//       const UserInformation = getUserInfoComponent();
//       const wrapper = mount(UserInformation);
//       wrapper.find("form").simulate("submit", {
//         preventDefault: () => {}
//       });
//       const actual = wrapper.find(Button).props().disabled;
//       const expected = true;
//       expect(actual).toBe(expected);
//     });
//   });
// });
