<template>
  <div id="app">
    <h1>Simple wysiwyg html editor</h1>
    <br>
    <wysiwyg v-model="myHTML"/>
    <br>
    <button type="button" class="btn btn-primary" style="margin-bottom: 20px;" @click="onSubmit">Submit</button>
    <br>
    <div class="container" @click="onReturn">
      <div class="result">
        <span class="badge badge-info" style="font-weight:700;font-size:24px;">{{result}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "indexPage",
    data() {
      return {
        result: "result",
        myHTML: "",
      };
    },
    methods: {
      onSubmit() {
        this.result = this.myHTML;
        this.myHTML = '';
      },
      onReturn() {
        this.myHTML = this.result;
      }
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

<style lang="css">
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
