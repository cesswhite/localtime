<template>
  <Card class="auto">
    <div>
      <h1 class="text-3xl font-semibold text-gray-800">{{ currenTime }}</h1>
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
      currenTime: null,
    };
  },
  created() {
    this.setTimer();
  },
  methods: {
    setTimer() {
      setInterval(() => {
        this.currenTime = this.momentTimeZone().format("LTS");
      }, 1 * 1000);
    },
  },
};
</script>

<style></style>
