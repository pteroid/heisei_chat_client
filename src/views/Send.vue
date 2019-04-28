<template>
  <div>
    <!--
    <select v-model="toYear">
      <option v-for="year in years" :value="year.value" :key="year.id">{{year.text}}</option>
    </select>
    -->

    <input type="radio" id="pokebell" value="Pokebell" v-model="toYear">
    <label for="pokebell">ポケベル(H0~8) </label>
    <input type="radio" id="keitai" value="Keitai" v-model="toYear">
    <label for="keitai">ガラケー(H9~19) </label>
    <input type="radio" id="smart" value="Smart" v-model="toYear">
    <label for="smart">スマートホン(H20~31) </label>

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
      identfier: "",
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
