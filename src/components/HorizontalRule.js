import styled from "styled-components";
import PropTypes from "prop-types";

const HorizontalRule = styled.hr`
  border: 0px;
  height: 1px;
  width: ${props => props.width};
  margin: ${props => props.margin};
  background-image: linear-gradient(
    to left,
    ${props => props.colorOne},
    ${props => props.colorTwo},
    ${props => props.colorOne}
  );
`;

HorizontalRule.propTypes = {
  width: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  colorOne: PropTypes.string.isRequired,
  colorTwo: PropTypes.string.isRequired
};

export default HorizontalRule;
