<template>
  <v-container>
    <v-row v-for="company in companies" :key="`${company}`">
      <v-col class="mt-2" cols="12">
        <h1>{{company.name}}</h1>
      </v-col>
      <v-col
        outlined
        v-for="item in company.data" :key="`${item.id}`"
        cols="12"
        lg="4"
        md="6"
        sm="6"
        xs="12"
      >
      
        <v-card class="mx-auto" outlined shaped>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Trending {{ item.type }}</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.trending_in }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" :href="item.url">
              <v-img :src="item.thumbnail"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              :href="item.url"
              target="_blank"
              :class="item.type"
            >
              <v-icon>{{ item.icon }}</v-icon>
              <v-card-text>View on {{ item.type }}</v-card-text>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dashboard } from "../shared/dashboard";
export default {
  name: "dashboard",

  data: () => ({ companies: [] }),
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      this.companies = await dashboard.getData();
      console.log(this.companies)
    },
  },
};
</script>

<style scoped>
.reddit {
  background-color: #ff4500;
  color: white;
}

.youtube {
  background-color: #ff0000;
  color: white;
}
</style>
