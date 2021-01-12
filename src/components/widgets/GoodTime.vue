<template>
  <Card class="flex items-center justify-between">
    <div class="text-left">
      <h1 class="text-4xl font-semibold text-gray-800">{{ currentTime }}!</h1>
      <small class="text-xs text-gray-400">Have a nice day!</small>
    </div>
    <div class="w-">
      <div class="h-24 w-24 rounded-full bg-gray-600 opacity-25"></div>
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      currentTime: null,
    };
  },
  created() {
    this.getTime();
  },
  methods: {
    getTime() {
      const currentHour = this.momentTimeZone().format("HH");
      if (currentHour >= 3 && currentHour < 12) {
        this.currentTime = "Good Morning";
      } else if (currentHour >= 12 && currentHour < 15) {
        this.currentTime = "Good Afternoon";
      } else if (currentHour >= 15 && currentHour < 20) {
        this.currentTime = "Good Evening";
      } else if (currentHour >= 20 && currentHour < 3) {
        this.currentTime = "Good Night";
      } else {
        return "";
      }
    },
  },
};
</script>
