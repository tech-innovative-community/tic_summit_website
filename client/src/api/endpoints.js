const host = "https://ticsummitbackend.herokuapp.com";
const server = "http://localhost:5000";
export const cloudinary =
  "https://api.cloudinary.com/v1_1/ticsummit-org/image/upload";

export const uploadUrl = "https://ticsummitbackend.herokuapp.com/api/upload";

export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const post = `${host}/api/post`;
export const serverPost = `${server}/api/post`;
export const PF = `${host}/images/`;

export const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
