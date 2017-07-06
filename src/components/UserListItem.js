import React from "react";
import PropTypes from "prop-types";
import { LinkItemContainer } from "./f7";
import UserItemContents from "./UserItemContents";

const UserListItem = props => {
  const userId = props.id;
  return (
    <LinkItemContainer url={`/profile/${userId}/`}>
      <UserItemContents margin="0 20px 0 0" {...props} />
    </LinkItemContainer>
  );
};

UserListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["student", "professor"]),
  schools: PropTypes.array.isRequired,
  overallRating: PropTypes.number.isRequired,
  userRatings: PropTypes.array.isRequired
};

export default UserListItem;
