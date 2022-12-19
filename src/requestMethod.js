import axios from "axios";

const baseUrl = "http://localhost:5000/api/";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;
const TOKEN = () => {
  if (
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      ?.currentUser?.accessToken
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.accessToken;
  } else {
    return "";
  }
};

export const publicRequest = axios.create({
  baseURL: baseUrl,
});

export const userRequest = axios.create({
  baseURL: baseUrl,
  headers: { token: `Bearer ${TOKEN()}` },
});
