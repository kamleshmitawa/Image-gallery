import axios from "axios";

const APIURL = "https://jsonplaceholder.typicode.com/";

export const getPhotosByPage = (page = 1) =>
  axios.get(`${APIURL}albums/${page}/photos`);

export const getPhotosByAlbumId = (albumId = 1) =>
  axios.get(`${APIURL}albums/${albumId}/photos`);
