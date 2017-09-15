import {
  schools,
  majors,
  ratingCategories,
  userRatings,
  users
} from "../dummy-data";

import { intersection } from "lodash";
import { createHashTableFromArray } from "../utils/GeneralUtils";
import * as DummyData from "../dummy-data";

export const RATING_CATEGORIES = {
  student: [
    { id: "DRFJY9jd", description: "Attends Group Meetings" },
    { id: "j84WAR77", description: "Contributes to Discussions" },
    { id: "wXe02QBg", description: "Completes Tasks on Time" },
    { id: "zoQCOOJO", description: "Quality of Completed Work" },
    { id: "Gb1tXreK", description: "Cooperative & Supportive" },
    { id: "TrK3zUiV", description: "Contributes Significantly" }
  ],
  professor: [
    { id: "T5wKYAmI", description: "Ability to Communicate Course Content" },
    { id: "jUtauYzO", description: "Availability Outside of Class Hours" },
    { id: "mh4m4LcX", description: "Fairness & Consistency in Grading" },
    { id: "yZyycMRm", description: "Knowledge of Course Material" },
    { id: "sBuPhZef", description: "Overall Teaching Effectivness" }
  ]
};

function getRatingDetails(ratings, userType) {
  const categories =
    userType === "student"
      ? [...ratingCategories.student]
      : [...ratingCategories.professor];

  return ratings.map(rating => {
    const details = categories.find(category => category.id === rating.id);
    return {
      id: rating.id,
      description: details.description,
      rating: rating.rating
    };
  });
}

const getUserDetails = userId => {
  const user = users.filter(user => user.id === userId).pop();

  let aggregateRatings = [];
  let individualRatings = [];

  if (user.type === "student") {
    aggregateRatings = getRatingDetails(user.aggregateRatings, "student");
    individualRatings = userRatings
      .filter(rating => rating.userId === user.id)
      .map(rating => ({
        ...rating,
        individualRatings: getRatingDetails(rating.individualRatings, "student")
      }));
  } else {
    aggregateRatings = getRatingDetails(user.aggregateRatings, "professor");
    individualRatings = userRatings
      .filter(rating => rating.userId === user.id)
      .map(rating => ({
        ...rating,
        individualRatings: getRatingDetails(
          rating.individualRatings,
          "professor"
        )
      }));
  }

  return {
    ...user,
    schools: getSchoolDetails(user.schools),
    majors: getMajorDetails(user.majors),
    aggregateRatings,
    userRatings: individualRatings
  };
};

const getSchoolDetails = schoolIds =>
  schoolIds.map(schoolId => schools.find(school => school.id === schoolId));

const getMajorDetails = majorIds =>
  majorIds.map(majorId => majors.find(major => major.id === majorId));

export const fetchUser = userId =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        reject({
          error: "User ID is missing"
        });
      } else {
        const user = getUserDetails(userId);
        resolve(user);
      }
    }, 1000);
  });

export const fetchUsers = options =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const numOfOptions = Object.keys(options).length;

      if (numOfOptions === 0) {
        reject({});
      } else {
        const users = [...DummyData.users]
          .filter(
            user => intersection(user.schools, options.schools).length > 0
          )
          .map(user => getUserDetails(user.id));

        resolve({
          page: 1,
          per_page: users.length,
          total: users.length,
          total_pages: 1,
          data: createHashTableFromArray(users, "id")
        });
      }
    }, 500);
  });

export const loginUser = credentials =>
  new Promise((resolve, reject) => {
    const { email, password } = credentials;

    if (!email || !password) {
      reject({
        error: "Wrong username and/or password"
      });
    } else {
      const allUsers = [...DummyData.users];
      const user = allUsers.find(user => user.username === email);
      const bookmarks = allUsers
        .filter(u => user.bookmarks.includes(u.id))
        .map(u => getUserDetails(u.id));
      const userInfo = {
        ...getUserDetails(user.id),
        bookmarks
      };

      resolve(userInfo);
    }
  });

export const bookmarkUser = (authUserId, userId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!authUserId || !userId) {
        reject({
          error: "Missing information"
        });
      } else {
        const user = getUserDetails(userId);

        resolve(user);
      }
    }, 1);
  });

export const removeUser = (authUserId, userId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!authUserId || !userId) {
        reject({ error: "Missing information" });
      } else {
        // TODO: API.deleteUser()
        resolve({});
      }
    }, 1);
  });

export const fetchSchools = () =>
  new Promise((resolve, reject) => {
    const schools = [...DummyData.schools];

    setTimeout(() => {
      if (schools.length === 0) {
        reject({
          error: "Could not retrieve schools at the moment"
        });
      } else {
        const response = {
          page: 1,
          per_page: schools.length,
          total: schools.length,
          total_pages: 1,
          data: schools
        };
        resolve(response);
      }
    }, 1);
  });

export const fetchMajors = () =>
  new Promise((resolve, reject) => {
    const majors = [...DummyData.majors];

    setTimeout(() => {
      if (majors.length === 0) {
        reject({
          error: "Could not retrieve majors at the moment"
        });
      } else {
        const response = {
          page: 1,
          per_page: majors.length,
          total: majors.length,
          total_pages: 1,
          data: majors
        };
        resolve(response);
      }
    }, 1);
  });

export const submitGeneralForm = (userId, formData) =>
  new Promise((resolve, reject) => {
    const data = { ...formData };

    setTimeout(() => {
      if (Object.keys(data).length === 0) {
        const res = createPostResponse({
          error: "Missing form information"
        });
        reject(res);
      } else {
        const user = getUserDetails(userId);
        const res = createPostResponse(user);
        resolve(res);
      }
    }, 1000);
  });

export const submitContactForm = (userId, formData) =>
  new Promise((resolve, reject) => {
    const data = { ...formData };

    setTimeout(() => {
      if (Object.keys(data).length === 0) {
        const res = createPostResponse({
          error: "Missing form information"
        });
        reject(res);
      } else {
        const res = createPostResponse({
          ...data,
          id: "2fjf92jls",
          createdAt: Date.now()
        });
        resolve(res);
      }
    }, 1000);
  });

export const submitRatingForm = (userId, formData) =>
  new Promise((resolve, reject) => {
    const data = { ...formData };

    setTimeout(() => {
      if (Object.keys(data).length === 0 || !userId) {
        reject({
          error: "Missing information"
        });
      } else {
        resolve({
          ...data,
          receivedAt: Date.now()
        });
      }
    }, 1000);
  });

export const submitRateProfessorForm = (userId, formData) =>
  new Promise((resolve, reject) => {
    const data = { ...formData };

    setTimeout(() => {
      if (Object.keys(data).length === 0 || !userId) {
        reject({
          error: "Missing information"
        });
      } else {
        resolve({
          ...data
        });
      }
    }, 1000);
  });

function createPostResponse(res) {
  return {
    ...res,
    createdAt: Date.now()
  };
}

/**
 * For Future Reference...
 */

// export const makeCreateUser = connection => user =>
//   connection.table('users').insert({
//     createdAt: Date.now(),
//     updatedAt: Date.now(),
//     first_name: user.first_name,
//     last_name: user.last_name,
//     email: user.email
//   })
