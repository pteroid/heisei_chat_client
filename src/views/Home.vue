<template>
  <div class="home">
    <router-link to="/keitai/mail">Mail</router-link>
    <router-link to="/pokebell">Pokebell</router-link>
    <div class="backAuth" v-if="!logged"></div>
    <div class="auth" v-if="!logged">
      <div class="auth2">
        <div class="authHeader">ログイン</div>
        <div class="authMain">
          <p>電話番号</p>
          <input type="text" v-model="phoneNum" placeholder="電話番号" maxlength="12">
        </div>
        <div class="authMain">
          <p>メールアドレス</p>
          <input type="email" v-model="address" placeholder="メールアドレス">
        </div>
        <div class="authMain">
          <p>ユーザーID</p>
          <input type="text" v-model="identfier" placeholder="ID" maxlength="16">
        </div>
        <button class="submitBtn" v-on:click="authSubmit()">OK!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { METHODS } from 'http';
export default {
  name: "home",
  data() {
    return {
      phoneNum: "",
      address: "",
      identfier: "",
      logged: false,
    };
  },
  methods: {
      authSubmit: function(){
          this.logged  =  true;
      }
  }
};
</script>

<style>
.backAuth {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  opacity: 0.7;
  z-index: 19999;
  display: block;
}
.auth {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  padding-bottom: 50px;
  transform: translate(-50%, -50%);
  background: #ccc;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 20000;
}
.auth2 {
  font-family: "ヒラギノ角ゴ Pro W3", "ＭＳ Ｐゴシック", sans-serif;
  margin: 10px;
  padding: 0px;
}
.authHeader {
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  color: blue;
  -webkit-font-smoothing: none;
  text-shadow: yellow 2px 2px 0px, yellow -2px 2px 0px, yellow 2px -2px 0px,
    yellow -2px -2px 0px;
  background: url(../assets/gifmagazine.gif);
  box-shadow: 2.5px 2.5px black;
}
.authMain {
  display: flex;
}
p {
  text-align: left;
  margin-left: 22.5px;
  width: 30%;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: none;
}
input {
  margin: 10px;
  padding-left: 10px;
  margin-right: 30px;
  font-size: 15px;
  flex: 1;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: none;
  box-shadow: 2.5px 2.5px;
}
.submitBtn {
  float: right;
  margin-top: 15px;
  margin-right: 30px;
  font-size: 15px;
  height: 30px;
  width: 120px;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: none;
  box-shadow: 2.5px 2.5px;
}
</style>