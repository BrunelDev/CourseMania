const getMessages = () => {
  // Logic to fetch messages from the server
  // Return the fetched messages
  fetch("http://192.168.1.104:8000/api/messages/", {
    method: "GET",

    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.warn(error);
    });
};

const sendMessage = (message) => {
  fetch("http://192.168.1.104:8000/api/messages/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
    }),
  });
};
const deleteAccount = async (id) => {
  await fetch(`http://192.168.1.104:8000/api/accounts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
    },
  });
};
const updateAccount = (id) => {
  fetch(`http://192.168.1.104:8000/api/accounts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "newUsername",
      email: "newEmail",
      password: "newPassword",
    }),
  });
};
const getActivities = async () => {
  const response = await fetch("http://192.168.1.104:8000/api/activities/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
    },
  });
  return await response.json();
};
const addActivities = async (activity_type, end_time, course) => {
  const response = await fetch("http://192.168.1.104:8000/api/activities/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      activity_type,
      end_time,
      course,
    }),
  });
  return await response.json();
};
const getOneActivity = async (id) => {
  const response = await fetch(
    `http://192.168.1.104:8000/api/activities/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
      },
    }
  );
  return await response.json();
};
const updateOneActivity = async (id) => {
  const response = await fetch(
    `http://192.168.1.104:8000/api/activities/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activity_type: "updatedActivityType",
        end_time: "updatedEndTime",
        course: "updatedCourse",
      }),
    }
  );
  return await response.json();
};
const deleteActivity = async (id) => {
  const response = await fetch(
    `http://192.168.1.104:8000/api/activities/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
      },
    }
  );
  return await response.json();
};
const getAssignments = async () => {
  const response = await fetch("http://192.168.1.104:8000/api/assignments/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
    },
  });
  return await response.json();
};
const addAssignments = async (
  title,
  description,
  due_date,
  course,
  learner,
  status
) => {
  const response = await fetch("http://192.168.1.104:8000/api/assignments/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      due_date,
      course,
      learner,
      status,
    }),
  });
  return await response.json();
};
const getOneAssignment = async (id) => {
  const response = await fetch(
    `http://192.168.1.104:8000/api/assignments/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
      },
    }
  );
  return await response.json();
};
const updateOneAssignement = async (
  id,
  updatedTitle,
  updatedDescription,
  updatedDueDate,
  updatedCourse,
  updatedLearner,
  updatedStatus
) => {
  const response = await fetch(
    `http://192.168.1.104:8000/api/assignments/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedTitle,
        description: updatedDescription,
        due_date: updatedDueDate,
        course: updatedCourse,
        learner: updatedLearner,
        status: updatedStatus,
      }),
    }
  );
  return await response.json();
};
const deleteOneAssignment = async (id) => {
  const response = await fetch(
    `http://192.168.1.104:8000/api/assignments/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        Accept: "application/json",
      },
    }
  );
  return await response.json();
};
const getCart = async () => {
  const response = await fetch("http://192.168.1.104:8000/api/cart/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
    },
  });
  return await response.json();
};
const updateCart = async () => {};
const getCategories = async () => {
  const response = await fetch("http://192.168.1.104:8000/api/categories/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return await response.json();
};
const addCategories = async (name) => {
  const response = await fetch("http://192.168.1.104:8000/api/categories/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
  return await response.json();
};

const getOneCategory = async (id) => {
  const response = await fetch(
    `http://192.168.1.104:800/api/categories/${id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  return await response.json();
};
