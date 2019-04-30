<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/pokebell">Pokebell</router-link>
      <router-link to="/send">pokebellSend</router-link>
    </div>
    <div class="external">
      <div class="inside">
        <div class="screen">{{messages[0].content}}</div>
        <div class="under">
          <div class="unser_left">
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div class="unser_right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pokebell",
  computed: {
    messages: {
      get() {
        return this.$store.state.receivedPokebellMessages;
      }
    }
  }
};
</script>

<style scoped>
.external {
  background-color: #666;
  border-radius: 1em;
  width: 300px;
  padding: 18px;
}
.inside {
  background-color: #333;
  border-radius: 1em;
  padding: 14px;
}
.screen {
  color: #fff;
  background-color: #6e8556;
  margin: 5px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.under {
  display: table;
  margin-top: 15px;
  width: 100%;
}
.under_left {
  display: table-cell;
  width: 55%;
}
.unser_right {
  display: table-cell;
  border-top: groove 10px #faef62;
  width: 30%;
}
button {
  width: 18%;
  margin-left: 1%;
  margin-right: 1%;
}
</style>
