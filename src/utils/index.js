import {
  schools,
  majors,
  ratingCategories,
  userRatings,
  users
} from "../dummy-data";

export const getUsers = () => users;

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
  } else {
    clone.aggregateRatings = getProfessorAggrRatingDetails(
      clone.aggregateRatings
    );
  }

  return clone;
};

const getSchoolDetails = schoolIds =>
  schoolIds.map(schoolId => schools.find(school => school.id === schoolId));

const getMajorDetails = majorIds =>
  majorIds.map(majorId => majors.find(major => major.id === majorId));

const getUserRatings = userId =>
  userRatings.filter(rating => rating.user === userId);

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
