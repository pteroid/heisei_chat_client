<template>
  <div class="homeBack">
    <center class="homec">
      <!--
    <select v-model="toYear">
      <option v-for="year in years" :value="year.value" :key="year.id">{{year.text}}</option>
    </select>
      -->
      <!--
    <input type="radio" id="pokebell" value="Pokebell" v-model="toYear">
    <label for="pokebell">ポケベル(H0~8) </label>
    <input type="radio" id="keitai" value="Keitai" v-model="toYear">
    <label for="keitai">ガラケー(H9~19) </label>
    <input type="radio" id="smart" value="Smart" v-model="toYear">
    <label for="smart">スマートホン(H20~31) </label>
    <div >
    <div v-if="toYear=='Pokebell'">
      <input type="text" v-model="phoneNum" placeholder="電話番号" maxlength="12">
    </div>
    <div v-if="toYear=='Keitai'">
      <input type="email" v-model="address" placeholder="メールアドレス">
    </div>
    <div v-if="toYear=='Smart'">
      <input type="text" v-model="identfier" placeholder="ID" maxlength="16">
    </div>

    <div>
      <textarea name="textbox" id="textbox" cols="30" rows="10"></textarea>
    </div>
    <button>send</button>
      -->
      <table border="6" bordercolor="red" width="500">
        <tr>
          <td>
            <marquee>
              <font size="14" color="blue">
                <i>
                  <b>平 成 チ ャ ッ ト</b>
                </i>
              </font>
            </marquee>
          </td>
        </tr>
      </table>
      <table width="480px">
        <tr>
          <td>
            <marquee behavior="alternate">
              <p class="advice">\ ゆ っ く り し て い っ て ね ！ /</p>
            </marquee>
          </td>
        </tr>
      </table>
      <div class="select">
        <div class="list">
          <!--<router-link tag="div" class="item" :to="{name: 'preview_mail', params:{id: message.id}}"-->
          <router-link tag="div" class="pokebell" to="/Pokebell">ポケベルへの受信を<br>確認</router-link>
        </div>
        <div class="list">
          <router-link tag="div" class="keitai" to="/keitai">ガラケーへの受信を<br>確認</router-link>
        </div>
        <div class="list">
          <router-link tag="div" class="create" to="/send">メッセージを<br>作成</router-link>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "Send",
  data() {
    return {
      toYear: "Pokebell",
      phoneNum: "",
      address: "",
      identfier: ""
      /*
      years: [
        { id: 1, text: "ポケベル(H0~8)", value: "Pokebell" },
        { id: 2, text: "ガラケー(H9~19)", value: "Keitai" },
        { id: 3, text: "スマートホン(H20~31)", value: "Smart" }
      ]
      */
    };
  }
};
</script>
<style>
.homec {
  position: absolute;
  width: 100%;
  padding-top: 13%;
}
.advice {
  width: 400px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: rgb(205, 43, 226);
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: none;
  text-shadow: blue 1.5px 1.5px 1px, blue -1.5px 1.5px 1px,
    blue 1.5px -1.5px 1px, blue -1.5px -1.5px 1px;
}
.homeBack {
  top: -1%;
  left: -1%;
  position: absolute;
  padding: 20px;
  height: 100%;
  width: 100%;
  background: url("../assets/haikei.gif");
}
.select {
  display: flex;
  width: 70%;
  margin-top: 60px;
}
.list {
  width: 33%;
}
.pokebell {
  margin: 10px;
  color: rgb(255, 94, 0);
  font-weight: bold;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: none;
  text-shadow: skyblue 1px 1px 0px, skyblue -1px 1px 0px,
    skyblue 1px -1px 0px, skyblue -1px -1px 0px;

  background: blue;
  padding: 18px;
  box-shadow: 2.5px 2.5px black;
}
.pokebell:hover {
  background: rgb(120, 120, 255);
  transform: translate(1.5px, 1.5px);
  box-shadow: 1px 1px black;
}
.pokebell:active {
  transform: translate(2.5px, 2.5px);
  box-shadow: 0px 0px black;
}

.list .keitai {
  margin: 10px;
  color: rgb(255, 94, 0);
  font-weight: bold;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: none;
  text-shadow: skyblue 1px 1px 0px, skyblue -1px 1px 0px,
    skyblue 1px -1px 0px, skyblue -1px -1px 0px;

  background: purple;
  padding: 18px;
  box-shadow: 2.5px 2.5px black;
}
.list .keitai:hover {
  background: plum;
  transform: translate(1.5px, 1.5px);
  box-shadow: 1px 1px black;
}
.list .keitai:active {
  transform: translate(2.5px, 2.5px);
  box-shadow: 0px 0px black;
}

.create {
  margin: 10px;
  color: orange;
  font-weight: bold;
  -webkit-font-smoothing: none;
  -moz-osx-font-smoothing: none;
  text-shadow: skyblue 1px 1px 0px, skyblue -1px 1px 0px,
    skyblue 1px -1px 0px, skyblue -1px -1px 0px;

  background: green;
  padding: 18px;
  box-shadow: 2.5px 2.5px black;
}
.create:hover {
  background: #88DD88;
  transform: translate(1.5px, 1.5px);
  box-shadow: 1px 1px black;
}
.create:active {
  transform: translate(2.5px, 2.5px);
  box-shadow: 0px 0px black;
}
</style>

