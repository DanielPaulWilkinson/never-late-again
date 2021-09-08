<template>
  <v-container>
    <v-row>
      <v-col class="mt-2" cols="12">
        <strong>Reddit</strong>
      </v-col>
      <v-col
        outlined
        v-for="item in items"
        :key="`${item}`"
        cols="12"
        md="12"
        sm="12"
      >
        <v-card>
          <v-col>
            <v-row>
              <v-card-title v-text="item.title"></v-card-title>
            <v-card-text>Ups {{item.ups}} | Comments {{item.num_comments}}</v-card-text>
            </v-row>
          </v-col>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reddit } from "../shared/reddit";
export default {
  name: "RedditTrending",

  data: () => ({ items: [] }),
  async created() {
    await this.getRedditPosts();
  },
  methods: {
    async getRedditPosts() {
      this.items = await reddit.getPosts();
      console.log(this.items);
    },
    getUrl(item) {
      return "https://www.reddit.com" + item.permalink;
    },
  },
};
</script>
