<template>
  <div class="">
    <good-time class="mb-4"></good-time>
    <Timer class="w-1/4"> </Timer>
  </div>
</template>

<script>
import GoodTime from "../components/widgets/GoodTime.vue";
import Timer from "../components/widgets/Timer.vue";
export default {
  components: {
    GoodTime,
    Timer,
  },
};
</script>
