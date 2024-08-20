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
