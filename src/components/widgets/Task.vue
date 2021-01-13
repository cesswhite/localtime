<template>
  <div
    class="w-full bg-gray-50 p-2 flex rounded-lg mb-2"
    draggable
    @dragstart="startDrag($event, item)"
  >
    <div class="mr-2">
      <input
        type="checkbox"
        class="appearance-none checked:bg-purple-600 checked:border-transparent w-3 h-3 rounded-full ring-2 ring-purple-300 focus:outline-none"
      />
    </div>
    <div class="flex flex-col">
      <span class="inline-block font-semibold text-gray-800 text-lg">
        {{ title }}
      </span>
      <p
        class="inline-block font-medium text-gray-800 text-sm whitespace-nowrap	overflow-ellipsis overflow-hidden	w-60"
      >
        {{ shortDescription }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "test",
    },
    shortDescription: {
      type: String,
      default: "This is a short description dfsdfdsfdsfdsfdsfdsfdsfdsfsdff",
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    startDrag(e, item) {
      console.log(e, item);
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemID", item.id);
    },
  },
};
</script>

<style></style>
