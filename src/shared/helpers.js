const axios = require("axios");

const getRedditUrlEndpoint = async function(subreddit) {
  return `https://www.reddit.com/r/${subreddit.title}/${subreddit.modifier}.json?limit=${subreddit.limit}`;
};

const getYoutubeApiEndpoint = async function(youtube) {
  return `${youtube.endpoint}?key=${youtube.key}&regionCode=GB&part=${youtube.part}&chart=${youtube.chart}&maxResults=${youtube.limit}`;
};

const getResponse = async function (url) {
  return await axios.get(url);
};

export default {
  getRedditUrlEndpoint,
  getYoutubeApiEndpoint,
  getResponse,
};
