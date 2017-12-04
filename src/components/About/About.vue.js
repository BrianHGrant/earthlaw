import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'About',
  components: {
      VuePerfectScrollbar
    },
  data() {
    return {
      isActive: true,
      settings: {
        maxScrollbarLength: 60
      },
      education: {
        show: true,
        images: [
          {
            "url": require("/Users/briangrant/Desktop/programming/drupal8/earthlawsite/libertatem/images/courtney.jpg")
          },
          {
            "url": require("/Users/briangrant/Desktop/programming/drupal8/earthlawsite/libertatem/images/courtney_graduation.jpg")
          }
        ]
      },
      legal: {
        show: false,
        images: [
          {
            "index": "1",
            "url": require("/Users/briangrant/Desktop/programming/drupal8/earthlawsite/libertatem/images/shirt_flip.jpg")
          }
        ]
      }
    }
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  }
}
