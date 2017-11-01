import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'MyCarousel',
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      photos: [
        {
          "id": 0,
          "caption": "Fields of Hemp",
          "text": "Courtney Taking a Ride in a Hemp Field",
          "image": require("/Users/briangrant/Desktop/programming/drupal8/earthlawsite/libertatem/images/carousel/hemp_field.jpg")
        },
        {
          "id": 1,
          "caption": "Courtney Panel",
          "text": "Speaking at a Panel",
          "image": require("/Users/briangrant/Desktop/programming/drupal8/earthlawsite/libertatem/images/carousel/courtney_panal.jpg")
        },
        {
          "id": 2,
          "caption": "Signing of HB 4060 ",
          "text": "Courtney with Oregon Govener Kate Brown at siging of HB 4060",
          "image": require("/Users/briangrant/Desktop/programming/drupal8/earthlawsite/libertatem/images/carousel/hb4060.jpg")
        }
      ]
    }
  }
}
