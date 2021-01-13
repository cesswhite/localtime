<template>
  <div class="w-full h-screen bg-purple-600 sticky top-0">
    <div class="w-full text-center py-4">
      <div class="rounded-full w-24 h-24 bg-gray-50 mx-auto mb-2"></div>
      <h3 class="font-semibold text-gray-50 text-lg">Username</h3>
    </div>
    <div class="text-left py-16 px-8">
      <ul>
        <router-link
          v-for="(button, index) in nav"
          :key="index"
          :to="button.route"
        >
          <li
            class="flex items-center hover:cursor-pointer hover:bg-purple-400 py-2 px-4 mb-4 rounded-md text-gray-50 font-semibold text-md"
          >
            <svg
              fill-rule="evenodd"
              clip-rule="evenodd"
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path :d="button.icon"></path>
            </svg>
            <span>{{ button.label }}</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="absolute bottom-2 w-full">
      <div class="relative w-full flex items-center px-4 justify-between">
        <small class="text-gray-50 opacity-25"
          >Made with ❤️ by Eco Studio</small
        >
        <svg
          class="w-6 h-6 fill-current text-gray-50 opacity-75"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          label: "Dashboard",
          icon:
            "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",
          route: "home",
        },
        {
          label: "Tasks",
          icon:
            "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
          route: "tasks",
        },
        {
          label: "Playground",
          icon:
            "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
          route: "playground",
        },
      ],
    };
  },
};
</script>
