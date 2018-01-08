import MyCarousel from './MyCarousel/MyCarousel.vue';

export default {
  name: 'Landing',
  components: {mycarousel: MyCarousel},
  data() {
    return {
      icon: require("/Users/briangrant/Desktop/programming/earthlaw/assets/blue_check.svg"),
      options: {
            dots: false,
            arrows: false,
            speed: 750,
            timing: "linear",
            fade: true,
            autoplay: true,
            pauseOnHover: false,
            // responsive: [
            //     {
            //         breakpoint: 600,
            //         settings: {
            //             dots: false
            //         }
            //     },
            //
            //     {
            //         breakpoint: 900,
            //         settings: {
            //             arrows: true,
            //             dots: true,
            //             infinite: false
            //         }
            //     }
            // ]
        }
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
