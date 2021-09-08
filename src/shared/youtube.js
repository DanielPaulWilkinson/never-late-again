const axios = require("axios");
import api from "../data/youtube.json";

const getVideos = async function() {
  return await getAllVideos(api[0]);
};

const getAllVideos = async function(api) {
  const url = `${api.endpoint}?key=${api.key}&part=${api.part}&chart=${api.chart}`;
  const response = await axios.get(url);
  return response.data.items;
};

export const youtube = {
  getVideos,
};
