<template>
  <div class="relative w-screen h-screen flex items-center">
    <div class="absolute w-screen h-screen bg-purple-400 z-10 opacity-75"></div>
    <div class="absolute w-screen h-screen bg-cover bg-image"></div>
    <div
      class="w-96 p-8  mx-auto rounded-lg shadow-2xl border border-gray-100 bg-gray-50 relative z-10"
    >
      <div class="w-full mb-4">
        <h1 class="font-bold text-xl text-shadow-md">Welcome</h1>
      </div>
      <div class="relative">
        <form action="">
          <div class="w-full text-left mb-2">
            <label class="text-xs font-semibold" for="username">Name</label>
            <input
              v-model.trim="form.username"
              :class="{ 'border-red-500': userIsFilled }"
              name="username"
              type="text"
              class="w-full h-10 border border-gray-200 rounded-sm mt-2 text-xs pl-2 text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <small v-if="userIsFilled" class="text-red-500"
              >Please fill the name</small
            >
          </div>
          <div class="w-full text-left">
            <label class="text-xs font-semibold" for="password">Password</label>
            <input
              v-model.trim="form.password"
              :class="{ 'border-red-500': passwordIsFilled }"
              name="password"
              type="password"
              class="w-full h-10 border border-gray-200 rounded-sm mt-2 pl-2 text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <small v-if="passwordIsFilled" class="text-red-500"
              >Please fill the password</small
            >
          </div>
          <div class="w-full mt-8">
            <button
              type="button"
              @click="goToDashboard()"
              class="bg-purple-600 font-semibold text-gray-50 rounded-sm text-xs py-3 px-12 shadow-2xl"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userIsFilled: false,
      passwordIsFilled: false,
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    goToDashboard() {
      if (this.form.username && this.form.password) {
        this.$router.push({ path: "home" });
        return true;
      }
      if (!this.form.username) {
        this.userIsFilled = !this.userIsFilled;
      }
      if (!this.form.password) {
        this.passwordIsFilled = !this.passwordIsFilled;
      }
    },
  },
};
</script>

<style>
.bg-image {
  background-image: url("https://source.unsplash.com/1600x900/?nature,water");
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.div-inside {
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
