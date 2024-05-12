import axios from "axios";
const BASE_URL = "http://localhost:4000";

// axios is third party lib which used to communicate with server.
const getinitialized = (contentType: string, token?: string, params?: any) => {
  let api = axios.create({
    params: params ? params : undefined,
    headers: {
      "Content-Type": contentType ? contentType : "application/json",
      "Access-Control-Allow-Origin": "*",
      "Bearer-Token": token ? token : "",
    },
  });
  return api;
};

// GET request
export const getRequest = (url: any, contentType: any) => {
  return getinitialized(contentType)
    .get(url, contentType)
    .catch((error: any) => {
      console.log(error);
    });
};

// GET request by ID
export const getRequestById = (url: any, id: any, contentType: any) => {
  const updatedUrl = `${url}/${id}`;
  return getinitialized(contentType)
    .get(updatedUrl, contentType)
    .catch((error: any) => {
      console.log(error);
    });
};

export const getRequestByParams = (
  url: any,
  id: any,
  contentType?: any,
  params?: any
) => {
  const updatedUrl = `${url}/${id}`;
  return getinitialized(contentType, '', params)
    .get(updatedUrl, contentType)
    .catch((error: any) => {
      console.log(error);
    });
};

// POST request
export const postrequestMethod = (url: any, contentType: any, data: any) => {
  return getinitialized(contentType)
    .post(url, data)
    .catch((error: any) => {
      console.log(error);
    });
};

// PUT request by ID
export const updateRequest = (
  url: any,
  id: any,
  data: any,
  contentType: any
) => {
  const updatedUrl = `${url}/${id}`; // Append the ID to the URL
  return getinitialized(contentType)
    .put(updatedUrl, data, contentType) // Use put() for HTTP PUT requests or patch() for HTTP PATCH requests
    .catch((error: any) => {
      console.log(error);
    });
};

// DELETE request by ID
export const deleteRequest = (url: any, id: any, contentType: any) => {
  const deleteUrl = `${url}/${id}`; // Append the ID to the URL
  return getinitialized(contentType)
    .delete(deleteUrl, contentType)
    .catch((error: any) => {
      console.log(error);
    });
};



