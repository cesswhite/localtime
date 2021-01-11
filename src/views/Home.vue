<template>
  <div class="home">
    <div class="hour-container">
      <div>
        <h1>Hora Céss</h1>
        <span>{{ currentTime }}</span>
      </div>
    </div>
    <div class="hour-container">
      <div>
        <h1>Hora Bebe</h1>
        <span>{{ currentTimeBaby }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: null,
      currentTimeBaby: null,
    };
  },
  created() {
    setInterval(() => {
      return this.hourLocal();
    }, 1 * 1000);
  },
  methods: {
    hourLocal() {
      this.currentTime = this.momentTimeZone()
        .tz("America/Mexico_City")
        .format("LTS");
      this.currentTimeBaby = this.momentTimeZone()
        .tz("America/Kentucky/Monticello")
        .format("LTS");
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
}
.hour-container {
  width: 50%;
  position: relative;
}
.hour-container > div {
  position: absolute;
  margin: 0;
  position: absolute;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hour-container > div > h1 {
  font-size: 2rem;
  margin: 0;
}
.hour-container > div > span {
  font-size: 10rem;
}

@media screen and (max-width: 1080px) {
  .home {
    flex-direction: column;
  }
  .hour-container {
    width: 100%;
    height: 50%;
  }
  .hour-container > div {
    position: relative;
    margin: 0 auto;
  }
}

@media screen and (max-width: 800px) {
  .hour-container {
    height: 50vh;
  }
  .hour-container > div > span {
    font-size: 5rem;
  }
}
</style>
