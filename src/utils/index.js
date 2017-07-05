import find from "lodash/find";

import {
  schools,
  majors,
  ratingCategories,
  userRatings,
  users
} from "../dummy-data";

const getUserDetails = userId => {
  const user = users.find(user => user.id === userId);

  user.schools = getSchoolDetails(user.schools);
  user.majors = getMajorDetails(user.majors);

  if (user.type === "student") {
    user.aggregateRatings = getStudentAggrRatingDetails(user.aggregateRatings);
  } else {
    user.aggregateRatings = getProfessorAggrRatingDetails(
      user.aggregateRatings
    );
  }

  return user;
};

const getSchoolDetails = schoolIds =>
  schoolIds.map(schoolId => schools.find(school => school.id === schoolId));

const getMajorDetails = majorIds =>
  majorIds.map(majorId => majors.find(major => major.id === majorId));

const getStudentAggrRatingDetails = aggrRatings =>
  aggrRatings.map(rating => {
    const details = ratingCategories.student.find(
      category => category.id === rating.id
    );
    return { description: details.description, rating: rating.rating };
  });

const getProfessorAggrRatingDetails = aggrRatings =>
  aggrRatings.map(rating => {
    const details = ratingCategories.professor.find(
      category => category.id === rating.id
    );
    return { description: details.description, rating: rating.rating };
  });

export default {
  getUserDetails
};
