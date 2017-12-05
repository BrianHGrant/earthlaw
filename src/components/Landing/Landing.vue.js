import MyCarousel from './MyCarousel/MyCarousel.vue';
import Icon from 'vue-awesome/components/Icon.vue'

export default {
  name: 'Landing',
  components: {mycarousel: MyCarousel},
  data() {
    return {
      icon: require("/Users/briangrant/Desktop/programming/earthlaw/assets/blue_check.svg")
    }
  },
  methods: {
    handleScroll (event) {
      console.log(window.scrollY)
      if (window.scrollY > 150) {
        $this.router.go('/practice');
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
