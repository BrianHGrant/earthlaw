export default {
  name: 'Scheduling',
  components: {},
  created() {
    let setmore = document.createElement('script');
    setmore.setAttribute('src',"https://my.setmore.com/js/iframe/setmore_iframe.js");
    document.head.appendChild(setmore);
  }
}
