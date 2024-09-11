import axios from "axios";
import { useLogin } from "@/lib/context";

const url = "http://192.168.0.103:8000";
// Create a new axios instance with the base URL and headers
const api = axios.create({
  baseURL: `${url}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const isLoggedIn = () => {
  const token = localStorage.getItem("accessToken");
  return !!token;
};
export const logOut = () => {
  localStorage.removeItem("accesToken");
  localStorage.setItem("username");
  localStorage.removeItem("userId");
  localStorage.removeItem("profileImage");
  localStorage.removeItem("status");
  return;
};

//login
export const login = (username, password) => {
  const response = fetch(url + "/api/users/login/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res", res.token);
      localStorage.setItem("accesToken", res.token);
      localStorage.setItem("username", res.username);
      localStorage.setItem("userId", res.id);
      localStorage.setItem("profileImage", url + res.profile_image);
      localStorage.setItem("status", res.status);
      return;
    })
    .catch((error) => {
      console.warn("Request failed:", error.response?.status);
      console.warn("Error data:", error.response?.data);
    });
  return response;
};

export const register = (username, password, email, status) => {
  const response = fetch(url + "/api/users/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      status: status,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res", res);
      return res;
    })
    .catch((error) => {
      console.warn("Request failed:", error.response?.status);
      console.warn("Error data:", error.response?.data);
    });
  return response;
};

export const getMessages = async (id) => {
  try {
    const response = await api.get("/messages/", { id });
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

// Send message
export const sendMessage = async (content, id, user, date) => {
  try {
    const response = await api.post("/messages/", {
      content,
      id,
      user,
      created_on: date,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

//Get user

export const getUser = async () => {
  try {
    const response = await api.get(`/users/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

// Delete account
const deleteAccount = async (id) => {
  try {
    const response = await api.delete(`/accounts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting account:", error);
  }
};

// Update account
const updateAccount = async (id) => {
  try {
    const response = await api.put(`/accounts/${id}`, {
      username: "newUsername",
      email: "newEmail",
      password: "newPassword",
    });
    return response.data;
  } catch (error) {
    console.error("Error updating account:", error);
  }
};

// Get activities
export const getActivities = async () => {
  try {
    const response = await api.get("/activities/");
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
  }
};

// Add activity
export const addActivities = async (activity_type, end_time, course) => {
  try {
    const response = await api.post("/activities/", {
      activity_type,
      end_time,
      course,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding activity:", error);
  }
};

// Get one activity
const getOneActivity = async (id) => {
  try {
    const response = await api.get(`/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity:", error);
  }
};

// Update one activity
export const updateOneActivity = async (id) => {
  try {
    const response = await api.put(`/activities/${id}`, {
      activity_type: "updatedActivityType",
      end_time: "updatedEndTime",
      course: "updatedCourse",
    });
    return response.data;
  } catch (error) {
    console.error("Error updating activity:", error);
  }
};

// Delete one activity
const deleteActivity = async (id) => {
  try {
    const response = await api.delete(`/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting activity:", error);
  }
};

// Get assignments
const getAssignments = async () => {
  try {
    const response = await api.get("/assignments/");
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments:", error);
  }
};

// Add assignment
const addAssignments = async (
  title,
  description,
  due_date,
  course,
  learner,
  status
) => {
  try {
    const response = await api.post("/assignments/", {
      title,
      description,
      due_date,
      course,
      learner,
      status,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding assignment:", error);
  }
};

// Get one assignment
const getOneAssignment = async (id) => {
  try {
    const response = await api.get(`/assignments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignment:", error);
  }
};

// Update one assignment
const updateOneAssignment = async (
  id,
  updatedTitle,
  updatedDescription,
  updatedDueDate,
  updatedCourse,
  updatedLearner,
  updatedStatus
) => {
  try {
    const response = await api.put(`/assignments/${id}`, {
      title: updatedTitle,
      description: updatedDescription,
      due_date: updatedDueDate,
      course: updatedCourse,
      learner: updatedLearner,
      status: updatedStatus,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating assignment:", error);
  }
};

// Delete one assignment
const deleteOneAssignment = async (id) => {
  try {
    const response = await api.delete(`/assignments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
  }
};

// Get cart
const getCart = async () => {
  try {
    const response = await api.get("/cart/");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

// Update cart (not implemented)
const updateCart = async () => {};

// Get categories
const getCategories = async () => {
  try {
    const response = await api.get("/categories/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

// Add category
const addCategories = async (name) => {
  try {
    const response = await api.post("/categories/", { name });
    return response.data;
  } catch (error) {
    console.error("Error adding category:", error);
  }
};

// Get one category
const getOneCategory = async (id) => {
  try {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};

// Update one category
const updateOneCategory = async (id, name) => {
  try {
    const response = await api.put(`/categories/${id}`, { name });
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
  }
};

// Delete one category
const deleteOneCategory = async (id) => {
  try {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};

// Get courses
export const getCourses = async (subcategory, page, pageSize) => {
  try {
    const response = await api.get("/courses/", {
      page,
      pageSize,
      subcategory,
      difficultyLevel,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};

// Add course
export const addCourse = async (
  subcategory,
  title,
  description,
  duration,
  difficultyLevel,
  episodeNumber,
  supplementary_resources,
  instructor
) => {
  try {
    const response = await api.post("/courses/", {
      subcategory,
      title,
      description,
      duration,
      difficultyLevel,
      episodeNumber,
      supplementary_resources,
      instructor,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding course:", error);
  }
};

// Get one course
const getOneCourse = async (id) => {
  try {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course:", error);
  }
};

// Update one course
const updateOneCourse = async (
  id,
  subcategory,
  title,
  description,
  duration,
  difficultyLevel,
  episodeNumber,
  supplementary_resources,
  instructor
) => {
  try {
    const response = await api.put(`/courses/${id}`, {
      subcategory,
      title,
      description,
      duration,
      difficultyLevel,
      episodeNumber,
      supplementary_resources,
      instructor,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
  }
};

// Delete one course
const deleteOneCourse = async (id) => {
  try {
    const response = await api.delete(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
  }
};

// Get course enrollment count
const getCourseEnrollmentCount = async (id) => {
  try {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course enrollment count:", error);
  }
};

// Get all enrollments
const allEnrollments = async () => {
  try {
    const response = await api.get("/enrollments/");
    return response.data;
  } catch (error) {
    console.error("Error fetching enrollments:", error);
  }
};

// Add enrollment
const addEnrollments = async (learner, course, dateCompleted) => {
  try {
    const response = await api.post("/enrollments/", {
      learner,
      course,
      date_completed: dateCompleted,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding enrollment:", error);
  }
};

// Get one enrollment count
const getOneEnrollmentsCount = async (id) => {
  try {
    const response = await api.get(`/enrollments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching enrollment count:", error);
  }
};

// Update one enrollment count
const updateOneEnrollmentsCount = async (
  id,
  learner,
  course,
  dateCompleted
) => {
  try {
    const response = await api.put(`/enrollments/${id}`, {
      learner,
      course,
      date_completed: dateCompleted,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating enrollment:", error);
  }
};

// Delete one enrollment
const deleteOneEnrollment = async (id) => {
  try {
    const response = await api.delete(`/enrollments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting enrollment:", error);
  }
};

// Get files
const getFiles = async () => {
  try {
    const response = await api.get("/files/", { page, pageSize });
    return response.data;
  } catch (error) {
    console.error("Error fetching files:", error);
  }
};

// Add files
const addFiles = async (uploadedFile, course) => {
  try {
    const response = await api.post("/files/", {
      uploadedFile,
      course,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding files:", error);
  }
};

// Update one file
const updateOneFile = async (id, updatedFile, updatedCourse) => {
  try {
    const response = await api.put(`/files/${id}`, {
      uploadedFile: updatedFile,
      course: updatedCourse,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating file:", error);
  }
};

// Delete files
const deleteFiles = async (id) => {
  try {
    const response = await api.delete(`/files/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting files:", error);
  }
};

// cREATE CONV ID

const createConvId = (id1, id2) => {
  return `${id1}_${id2}`;
};
const getConersations = async (id) => {
  try {
    const res = await api.get(`/conversations/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching conversations:", error);
  }
};
const getReports = async () => {
  try {
    const res = await api.get("/reports/");
    return response.data;
  } catch (error) {
    console.error("Error fetching reports:", error);
  }
};
const sendReports = async (title, content, learner) => {
  try {
    const res = await api.post("/reports/", { title, content, learner });
    return response.data;
  } catch (error) {
    console.error("Error sending reports:", error);
  }
};
const deleteReport = async (id) => {
  try {
    const res = api.delete(`/reports/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting reports:", error);
  }
};
export const getMentor = async () => {
  try {
    const res = await api.get("/mentor");
    return res.data;
  } catch (error) {
    console.error("Error fetching mentor:", error);
  }
};
