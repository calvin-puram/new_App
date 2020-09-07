import cookie from "js-cookie";

// set cookie to LS
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, { expires: 1 });
  }
};

// remove cookie from LS
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, { expires: 1 });
  }
};

// get cookie from LS
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

// set in lS
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// remove from LS
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// auth user ater login
export const authenticate = (response, next) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

// signOut
export const logout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};

// get user from LS
export const isAuth = () => {
  const cookieChecked = getCookie("token");
  if (cookieChecked) {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
  }
};

export const updateUser = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
