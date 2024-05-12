import axios from "axios";

const BASE_URL = "http://localhost:4000";

// Create an Axios instance with custom configurations
const getInitialized = (contentType: string, token?: string, params?: any) => {
  return axios.create({
    baseURL: BASE_URL, // Set the base URL for all requests
    params: params ? params : undefined,
    headers: {
      "Content-Type": contentType ? contentType : "application/json",
      "Access-Control-Allow-Origin": "*",
      "Bearer-Token": token ? token : "",
    },
  });
};

// GET request
export const getRequest = (url: string, contentType: string) => {
  return getInitialized(contentType)
    .get(url)
    .catch((error: any) => {
      console.log(error);
    });
};

// GET request by ID
export const getRequestById = (
  url: string,
  id: string,
  contentType: string
) => {
  const updatedUrl = `${url}/${id}`;
  return getInitialized(contentType)
    .get(updatedUrl)
    .catch((error: any) => {
      console.log(error);
    });
};

// GET request with parameters
export const getRequestByParams = (
  url: string,
  id: string,
  contentType: string,
  params?: any
) => {
  const updatedUrl = `${url}/${id}`;
  return getInitialized(contentType, '', params)
    .get(updatedUrl)
    .catch((error: any) => {
      console.log(error);
    });
};

// POST request
export const postRequestMethod = (
  url: string,
  contentType: string,
  data: any
) => {
  return getInitialized(contentType)
    .post(url, data)
    .catch((error: any) => {
      console.log(error);
    });
};

// PUT request by ID
export const updateRequest = (
  url: string,
  id: string,
  data: any,
  contentType: string
) => {
  const updatedUrl = `${url}/${id}`; // Append the ID to the URL
  return getInitialized(contentType)
    .put(updatedUrl, data) // Use put() for HTTP PUT requests or patch() for HTTP PATCH requests
    .catch((error: any) => {
      console.log(error);
    });
};

// DELETE request by ID
export const deleteRequest = (
  url: string,
  id: string,
  contentType: string
) => {
  const deleteUrl = `${url}/${id}`; // Append the ID to the URL
  return getInitialized(contentType)
    .delete(deleteUrl)
    .catch((error: any) => {
      console.log(error);
    });
};
