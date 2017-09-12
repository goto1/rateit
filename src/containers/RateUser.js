import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchSchoolsIfNeeded, fetchMajorsIfNeeded } from "../actions";
import RateUserProfessorForm from "./RateUserProfessorForm";
import RateUserStudentForm from "./RateUserStudentForm";
import PreloaderScreen from "../components/PreloaderScreen";
import {
  ContentBlock,
  ContentBlockTitle,
  List,
  NavCenter,
  NavLeft,
  Navbar
} from "../components/f7";
import { Page } from "framework7-react";
import { RATING_CATEGORIES } from "../utils/API";
import { filterByType } from "../utils/GeneralUtils";

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
  componentDidMount() {
    const props = this.props;

    props.fetchSchoolsIfNeeded();
    props.fetchMajorsIfNeeded();
  }

  handleSelectChange = (e, handleChange) => {
    const selected = [...e.target.options].filter(option => option.selected);

    handleChange(e.target.name, selected[0].value);
  };

  getFormProps = () => {
    const { auth, majors, route } = this.props;
    const userType = route.query.type;

    const majorOptions = filterByType(majors, "object");
    const schoolOptions = auth.info ? auth.info.schools : [];

    const selectedSchool = auth.info ? auth.info.schools[0].id : "";
    const selectedMajor = auth.info ? auth.info.majors[0].id : "";

    return {
      major: selectedMajor,
      majors: majorOptions,
      ratingCategories:
        userType === "professor"
          ? RATING_CATEGORIES.professor
          : RATING_CATEGORIES.student,
      school: selectedSchool,
      schools: schoolOptions
    };
  };

  render() {
    const { schools, majors } = this.props;
    const userType = this.props.route.query.type;
    const formProps = this.getFormProps();

    const isLoading =
      schools.receivedAt === undefined && majors.receivedAt === undefined;

    const RatingForm =
      userType === "professor"
        ? <RateUserProfessorForm
            handleSelectChange={this.handleSelectChange}
            {...formProps}
          />
        : <RateUserStudentForm
            handleSelectChange={this.handleSelectChange}
            {...formProps}
          />;

    return (
      <Page>
        <Navbar>
          <NavLeft backLink="Cancel" sliding />
          <NavCenter sliding>Rating Submission</NavCenter>
        </Navbar>
        {isLoading ? <PreloaderScreen size="big" /> : RatingForm}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route,
  auth: state.auth,
  schools: state.schools,
  majors: state.majors
});

const mapDispatchToProps = dispatch => ({
  fetchSchoolsIfNeeded: () => dispatch(fetchSchoolsIfNeeded()),
  fetchMajorsIfNeeded: () => dispatch(fetchMajorsIfNeeded())
});

RateUser = connect(mapStateToProps, mapDispatchToProps)(RateUser);

export default RateUser;
