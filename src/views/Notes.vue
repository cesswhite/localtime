<template>
  <div>
    <h1>ROUTE NOTES TEST</h1>
    <br />
    <span v-for="(note, index) in notes" :key="index">
      {{ note.name }} <br />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
    };
  },
  created() {
    this.allNotes();
  },
  methods: {
    allNotes() {
      this.axios
        .get("note")
        .then((response) => {
          console.log(response);
          this.notes = response.data;
        })
        .catch((e) => {
          console.log("error" + e);
        });
    },
  },
};
</script>
