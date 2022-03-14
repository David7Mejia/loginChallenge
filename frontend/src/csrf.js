// frontend/src/store/csrf.js
import Cookies from "js-cookie";

export  async function csrfFetch(url, options = {}) {
  // if there is no method set options.method to 'GET'
  options.method = options.method || "GET";
  // if there is no headers set options.headers to an empty object
  options.headers = options.headers || {};

  // if method is not 'GET', set the "Content-Type" header to "application/json",
  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] =
    options.headers["Content-Type"] || "application/json";
    // set"XSRF-TOKEN" header to the value of "XSRF-TOKEN" cookie
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }
  // call the default window's fetch with the url and the options passed in
  const res = await window.fetch(url, options);

  // if res code is 400 or above then throw an error with error as response
  if (res.status >= 400) throw res;

  // if the response status code is under 400, then return the response to the
  // next promise chain

  // if res code is under 400 then return res to next promise chain
  return res;
}


