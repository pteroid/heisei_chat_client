<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/pokebell">Pokebell</router-link>
      <router-link to="/send">pokebellSend</router-link>
    </div>
    <div>
      <textarea name="textbox" id="textbox" cols="30" rows="10"></textarea>
    </div>
    <button>send</button>
  </div>
</template>

<script>
export default {
  name: "Send",
};
</script>
