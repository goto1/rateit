import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import RateUserProfessorForm from "./RateUserProfessorForm";
import RateUserStudentForm from "./RateUserStudentForm";
import {
  ContentBlock,
  ContentBlockTitle,
  List,
  NavCenter,
  NavLeft,
  Navbar
} from "../components/f7";
import { Page } from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

export const StyledContentBlock = styled(ContentBlock)`
  margin: 0 !important;
  text-transform: uppercase;
  text-align: center;
  color: red !important;
  font-size: 12.5px;
  letter-spacing: .5px;
`;

const StyledList = styled(List)`
  margin-bottom: ${props =>
    `${props.margin ? props.margin : "25"}px !important`};
`;

export const FormSection = ({ title, margin, children }) =>
  <div>
    <ContentBlockTitle>
      {title}
    </ContentBlockTitle>
    <StyledList margin={margin} inset>
      {children}
    </StyledList>
  </div>;

FormSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

class RateUser extends React.Component {
  fetchUserInfo = () => {
    const allSchools = API.getSchools();
    const currUser = API.getUserDetails("UArjrbxWHX");
    this.allMajors = API.getMajors();

    const t1 = currUser.schools.map(school => school.id);
    this.schools = allSchools.filter(school => t1.includes(school.id));

    this.school = this.schools.slice(0, 1).map(school => school.id).toString();
    this.major = currUser.majors.slice(0, 1).map(major => major.id).toString();

    this.profRatingCat = API.getRatingCategories().professor;
    this.studRatingCat = API.getRatingCategories().student;
  };

  handleSelectChange = (e, handleChange) => {
    const selected = [...e.target.options].filter(option => option.selected);
    handleChange(e.target.name, selected[0].value);
  };

  render() {
    this.fetchUserInfo();
    const userType = JSON.parse(this.props.currentRoute.query).type;
    const pFormProps = {
      handleSelectChange: this.handleSelectChange,
      majors: this.allMajors,
      ratingCategories: this.profRatingCat,
      schools: this.schools,
      major: this.major,
      school: this.school
    };
    const sFormProps = {
      ...pFormProps,
      ratingCategories: this.studRatingCat
    };
    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Cancel" sliding />
          <NavCenter sliding>Rating Submission</NavCenter>
        </Navbar>
        {userType === "professor"
          ? <RateUserProfessorForm {...pFormProps} />
          : <RateUserStudentForm {...sFormProps} />}
      </Page>
    );
  }
}

const mapStateToProps = state => ({ currentRoute: state.currentRoute });

RateUser = connect(mapStateToProps)(RateUser);

export default RateUser;
