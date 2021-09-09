import reddit from "../data/subreddits.json";
import youtube from "../data/youtube.json";
import helpers from "../shared/helpers";

const getData = async function() {
  let youtubeData = {
    name: "Youtube",
    data: [],
  };
  let redditData = {
    name: "Reddit",
    data: [],
  };

  for (let i = 0; i < reddit.length; i++) {
    let sub = await getSubRedditPosts(reddit[i]);
    redditData.data = redditData.data.concat(sub);
  }

  for (let i = 0; i < youtube.length; i++) {
    let chart = await getYoutubeMostPopular(youtube[i]);
    youtubeData.data = youtubeData.data.concat(chart);
  }

  return { redditData, youtubeData };
};

const getYoutubeMostPopular = async function(youtube) {
  try {
    const url = await helpers.getYoutubeApiEndpoint(youtube);
    const res = await helpers.getResponse(url);
    let tempArr = [];

    let dataLength = res.data.items.length;
    for (var i = 0; i < dataLength; i++) {
      let data = res.data.items[i];

      let model = {};

      if ("player" in data) {
        model.player = data.player.embedHtml ?? "";
      }

      if ("statistics" in data) {
        model.statistics = data.statistics.viewCount ?? "";
      }

      model.id = data.id;
      model.title = data.snippet.title;
      model.type = "youtube";
      (model.trending_in = youtube.modifier),
        (model.url = `https://www.youtube.com/watch?v=${data.id}`),
        (model.icon = "mdi-youtube"),
        (model.thumbnail = data.snippet.thumbnails.default.url),
        tempArr.push(model);
    }
    return tempArr;
  } catch {
    console.log('error code - oops 1');
    return [];
  }
};

//get all data from one subreddit
const getSubRedditPosts = async function(subreddit) {
  const url = await helpers.getRedditUrlEndpoint(subreddit);
  const res = await helpers.getResponse(url);
  let tempArr = [];

  for (var i = 0; i < res.data.data.children.length; i++) {
    let data = res.data.data.children[i].data;
    tempArr.push({
      id: data.id,
      title: data.title,
      ups: data.ups,
      downs: data.downs,
      over_18: data.over_18,
      spoiler: data.spoiler,
      description: data.description,
      score: data.score,
      num_comments: data.num_comments,
      thumbnail: data.thumbnail,
      type: "reddit",
      viewCount: data.viewCount,
      trending_in: data.subreddit_name_prefixed,
      url: `https://www.reddit.com${data.permalink}`,
      icon: "mdi-reddit",
    });
  }
  return tempArr;
};

export const dashboard = {
  getData,
};
