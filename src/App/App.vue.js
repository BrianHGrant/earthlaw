import MyHeader from './MyHeader/MyHeader.vue';

export default {
  name: 'app',
  components: {myheader: MyHeader},
    data() {
      return {
        company:
        {
          "title": "EARTHLAW",
          "field_city": "Portland",
          "field_email_address": "courtney@earthlawllc.com",
          "field_facebook_link": "https://www.facebook.com/EARTH-Law-LLC-1438632466447159/",
          "field_logo": require("../assets/logo.png"),
          "field_phone": "541-632-HEMP",
          "field_state": "OR",
          "field_street_address": "",
          "field_zipcode": "",
          "field_tag_line": "Environmental Advocate Representing True Hemp",
          "field_company_summary": "Admitted to Practice in Oregon, Wisconsin, and Minnesota"
        },
        carouselphotos: [
          {
            "id": 0,
            "caption": "Fields of Hemp",
            "text": "Courtney Taking a Ride in a Hemp Field",
            "image": "../libertatem/images/carousel/hemp_field.jpg"
          },
          {
            "id": 1,
            "caption": "Courtney Panel",
            "text": "Speaking at a Panel",
            "image": "../libertatem/images/carousel/courtney_panal.jpg"
          },
          {
            "id": 2,
            "caption": "Signing of HB 4060 ",
            "text": "Courtney with Oregon Govener Kate Brown at siging of HB 4060",
            "image": "../libertatem/images/carousel/hb4060.jpg"
          }
        ],
        updates: [
        {
          "id": 1,
          "timestamp": "",
          "post_date": "2017-09-14T12:00:00Z",
          "link": "<a href=\"http://www.occnewspaper.com/support-the-re-legalizing-industrial-hemp-project/\">http://www.occnewspaper.com/support-the-re-legalizing-industrial-hemp-project/</a>",
          "body": "Oregon's tireless hemp focused attorney, Courtney Moran, and Earthlaw LLC is leading a new campaign to remove industrial hemp from the Controlled Substances Act. She is circulating this press release to get those who support industrial hemp to sign-on to her petition and her Indiegogo campaign to raise money. So far, they have raised 1,100 dollars, but they need more! Help them reach their goal!",
          "image": "../earthlawllc/sites/default/files/styles/medium/public/2017-09/Relegalizing_Industrial_Hem.png?itok=AXrWNkbN",
          "title": "Support the Re-legalizing Industrial Hemp Project"
        },
        {

          "timestamp": "",
          "post_date": "2017-09-14T12:00:00Z",
          "link": "<a href=\"http://www.occnewspaper.com/support-the-re-legalizing-industrial-hemp-project/\">http://www.occnewspaper.com/support-the-re-legalizing-industrial-hemp-project/</a>",
          "body": "Oregon's tireless hemp focused attorney, Courtney Moran, and Earthlaw LLC is leading a new campaign to remove industrial hemp from the Controlled Substances Act. She is circulating this press release to get those who support industrial hemp to sign-on to her petition and her Indiegogo campaign to raise money. So far, they have raised 1,100 dollars, but they need more! Help them reach their goal!",
          "image": "../earthlawllc/sites/default/files/styles/medium/public/2017-09/Relegalizing_Industrial_Hem.png?itok=AXrWNkbN",
          "title": "Support the Re-legalizing Industrial Hemp Project"
        }
      ]
    }
  }
}
