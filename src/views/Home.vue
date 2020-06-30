<template>
  <div class="home home-container">
    <h3>Philippines Covid19 - Data</h3>
    <small>Last updated: {{ stats.lastUpdate | date }}</small>
    <StatsCard
      v-bind:color="'-text-blue'"
      title="Confirmed Cases"
      v-bind:case="stats.confirmed.value.toLocaleString()"
    />
    <StatsCard
      v-bind:color="'-text-primary'"
      title="Recovered"
      v-bind:case="stats.recovered.value.toLocaleString()"
    />
    <StatsCard
      v-bind:color="'-text-error'"
      title="Deaths"
      v-bind:case="stats.deaths.value.toLocaleString()"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import StatsCard from '@/components/StatsCard.vue';
import StatsService from '@/services/StatsService.js';

export default {
  components: {
    StatsCard
  },

  data() {
    return {
      stats: {
        confirmed: {
          value: 0
        },
        recovered: {
          value: 0
        },
        deaths: {
          value: 0
        },
        lastUpdate: {
          value: 0
        }
      }
    };
  },

  created() {
    StatsService.getStats()
      .then(response => {
        this.stats = response.data;
        // console.log(response.data);
        // console.log(response.data.confirmed);
      })
      .catch(error => {
        console.log('There was an error:' + error.response);
      });
  }
};
</script>
