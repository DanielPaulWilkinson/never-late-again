<template>
  <v-container>
    <v-row>
      <v-col class="mt-2" cols="12">
        <strong>Youtube</strong>
      </v-col>
      <v-col
        outlined
        v-for="item in items"
        :key="`${item.title}`"
        cols="12"
        md="6"
        sm="6"
      >
        <v-card  outlined tile>
            <v-row>
                <v-col cols="12"  md="12" sm="12">
                    <div class="yt" v-html="item.player.embedHtml" >
                    </div>
                </v-col>
            </v-row>
           
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
import { youtube } from "../shared/youtube";
export default {
  name: "YoutubeTrending",

  data: () => ({ items: [] }),
  async created() {
    await this.getVideos();
  },
  methods: {
    async getVideos() {
      this.items = await youtube.getVideos();
      console.log(this.items);
    }
  },
};
</script>

<style>
.yt {
  position: relative;
  display: block;
  width: 90%; /* width of iframe wrapper */
  height: 0;
  margin: 20px auto;
  padding: 0% 0% 56.25%; /* 16:9 ratio */
  overflow: hidden;
}
.yt iframe {
  position: absolute;
  top: 0; bottom: 0; left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
