const axios = require("axios");
import subData from "../data/subreddits.json";

const getPosts = async function() {
  var posts = [];
  for (var i = 0; i < subData.length; i++) {
    var data = await getAllHotPosts(subData[i]);
    posts = posts.concat(data);
  }

  posts = posts.sortBy("ups");
  return posts;
};

const getAllHotPosts = async function(sub) {
  const url = "https://www.reddit.com/r/" + sub.title + "/hot.json?limit=5";
  const response = await axios.get(url);
  var post = [];

  for (var i = 0; i < response.data.data.children.length; i++) {
    post[i] = response.data.data.children[i].data;
  }

  return post;
};

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a, b) {
    return a[p] > b[p] ? 1 : a[p] < b[p] ? +1 : 0;
  });
};

export const reddit = {
  getPosts,
};
