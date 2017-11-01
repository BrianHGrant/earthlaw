import PayPal from 'vue-paypal-checkout'

export default {
  name: 'Update',
  components: {
    PayPal
  },
  data() {
    return {
      pay: {
        amount: "00.00",
        number: ""
      },
      credentials: {
          sandbox: 'ASEZNuo9w9G8U3_T-HEd63BoC6wOe6ISqhMrEi9Ht0vKdxhfXd2EktjQWpK7arbiiGUWrByHTaUCrmH2',
          production: '<production client id>'
        }
    }
  }
}
