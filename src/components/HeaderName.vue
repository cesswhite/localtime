<template>
  <div class="w-full text-left flex items-center justify-between">
    <div>
      <h1 class="text-4xl font-semibold text-gray-800">{{ name }}</h1>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = this.$route.meta.title;
  },
};
</script>

<style></style>
