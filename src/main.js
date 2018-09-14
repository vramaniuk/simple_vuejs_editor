import Vue from 'vue'
import App from './App.vue'
import wysiwyg from "vue-wysiwyg";

Vue.use(wysiwyg, {
  // { [module]: boolean (set true to hide) }
  hideModules: {
    "justifyLeft": true,
    "justifyCenter": true,
    "justifyRight": true,
    "headings": true,
    "link": true,
    "code": true,
    "orderedList": true,
    "unorderedList": true,
    "image": true,
    "table": true,
    "removeFormat": true,
    "separator": true
  },
  // limit content height if you wish. If not set, editor size will grow with content.
  maxHeight: "500px"
});

new Vue({
  el: '#app',
  render: h => h(App)
})
