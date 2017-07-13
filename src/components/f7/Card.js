import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: ${props => (props.margin ? `${props.margin} !important` : "10px")};
`;

const Card = ({ margin, children }) =>
  <Wrapper margin={margin} className="card">
    {children}
  </Wrapper>;

Card.propTypes = {
  margin: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
