import {
  schools,
  majors,
  ratingCategories,
  userRatings,
  users
} from "../dummy-data";

export const getUsers = () => users;

export const getSchools = () => schools;

export const getMajors = () => majors;

export const getRatingCategories = () => ratingCategories;

export const getUserDetails = userId => {
  const user = users.find(user => user.id === userId);
  const clone = { ...user };

  clone.schools = getSchoolDetails(user.schools);
  clone.majors = getMajorDetails(user.majors);
  clone.userRatings = getUserRatings(user.id);

  if (clone.type === "student") {
    clone.aggregateRatings = getStudentAggrRatingDetails(
      clone.aggregateRatings
    );
    clone.userRatings = clone.userRatings.map(rating => ({
      ...rating,
      individualRatings: getStudentAggrRatingDetails(rating.individualRatings)
    }));
  } else {
    clone.aggregateRatings = getProfessorAggrRatingDetails(
      clone.aggregateRatings
    );
    clone.userRatings = clone.userRatings.map(rating => ({
      ...rating,
      individualRatings: getProfessorAggrRatingDetails(rating.individualRatings)
    }));
  }

  return clone;
};

const getSchoolDetails = schoolIds =>
  schoolIds.map(schoolId => schools.find(school => school.id === schoolId));

const getMajorDetails = majorIds =>
  majorIds.map(majorId => majors.find(major => major.id === majorId));

const getUserRatings = userId =>
  userRatings.filter(rating => rating.userId === userId);

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
