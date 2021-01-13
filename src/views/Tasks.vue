<template>
  <div class="">
    <Header-name class="mb-12">
      <button class="font-semibold text-lg text-purple-600">Add task+</button>
    </Header-name>
    <div class="w-full grid grid-cols-3 gap-4">
      <div class="text-left">
        <h1 class="font-semibold text-lg text-gray-800 mb-2">TO DO</h1>
        <div
          class="bg-gray-200 h-screen rounded-md p-2"
          @drop="onDrop($event, 1)"
          @dragover.prevent
          @dragenter.prevent
        >
          <Task-widget
            v-for="(task, index) in listOne"
            :key="index"
            :item="task"
            :title="task.title"
          >
          </Task-widget>
        </div>
      </div>
      <div class="text-left">
        <h1 class="font-semibold text-lg text-gray-800 mb-2">IN PROGRESS</h1>
        <div
          class="bg-gray-200 h-screen rounded-md p-2"
          @drop="onDrop($event, 2)"
          @dragover.prevent
          @dragenter.prevent
        >
          <Task-widget
            v-for="(task, index) in listTwo"
            :key="index"
            :item="task"
            :title="task.title"
          >
          </Task-widget>
        </div>
      </div>
      <div class="text-left">
        <h1 class="font-semibold text-lg text-gray-800 mb-2">FINISHED</h1>
        <div class="bg-gray-200 h-screen rounded-md p-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderName from "../components/HeaderName";
import TaskWidget from "../components/widgets/Task";
export default {
  components: {
    HeaderName,
    TaskWidget,
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Item A",
          list: 1,
        },
        {
          id: 1,
          title: "Item B",
          list: 1,
        },
        {
          id: 2,
          title: "Item C",
          list: 2,
        },
      ],
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
  },
  methods: {
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    },
  },
};
</script>
