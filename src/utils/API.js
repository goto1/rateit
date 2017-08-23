import {
  schools,
  majors,
  ratingCategories,
  userRatings,
  users
} from "../dummy-data";

const getUserDetails = userId => {
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

export const fetchUser = id =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject({
          error: {
            code: 404,
            message: "User ID is not found"
          }
        });
      } else {
        const user = getUserDetails(id);
        resolve({
          data: {
            ...user
          }
        });
      }
    }, 1000);
  });

export const loginUser = credentials =>
  new Promise((resolve, reject) => {
    if (!credentials.email) {
      reject({
        error: {
          code: 404,
          message: "Missing credentials"
        }
      });
    }
    const user = users.find(user => user.username === credentials.email);
    const bookmarked = [...user.bookmarks];
    const bookmarks = users
      .filter(user => bookmarked.includes(user.id))
      .map(user => getUserDetails(user.id));

    if (!user) {
      reject({
        error: {
          code: 404,
          message: "User not found"
        }
      });
    } else {
      resolve({
        data: {
          ...user,
          bookmarks
        }
      });
    }
  });

export const bookmarkUser = (currUserId, userId) =>
  new Promise((resolve, reject) => {
    if (!userId) {
      reject({
        error: {
          code: 404,
          message: "Missing credentials"
        }
      });
    } else {
      const bookmarkedUser = users.find(user => user.id === userId);
      resolve({
        data: {
          ...getUserDetails(userId)
        }
      });
    }
  });
