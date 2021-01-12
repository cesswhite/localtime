<template>
  <div class="h-screen w-screen flex">
    <div class="w-1/4">
      <Menu></Menu>
    </div>
    <div class="w-3/4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "../components/MenuRight";
export default {
  components: {
    Menu,
  },
};
</script>
