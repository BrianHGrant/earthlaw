// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'vue-awesome/icons'
//import the App component
import App from './App/App'
//import the vue router
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueObserveVisibility from 'vue-observe-visibility'
//tell vue to use the router
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueObserveVisibility)
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
//import the components component
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Practice from './components/Practice/Practice'
import Updates from './components/Updates/Updates'
import Update from './components/Updates/Update/Update'
import Payments from './components/Payments/Payments'
import Scheduling from './components/Scheduling/Scheduling'

//define your routes
const routes = [
  //route for the home route of the web page
  { path: '/', component: Landing },
  //route for the about route of the web page
  { path: '/about', component: About },
  { path: '/practice', component: Practice },
  { path: '/updates', component: Updates },
  { path: '/updates/:id', component: Update },
  { path: '/payments', component: Payments },
  { path: '/scheduling', component: Scheduling }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 200 }
  }
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
