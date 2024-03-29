// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import GridsomeScrollReveal from 'gridsome-scroll-reveal'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(GridsomeScrollReveal)

  // Add an external Javascript before the closing </body> tag
  // head.script.push({
  //   src: 'https://platform.twitter.com/widgets.js',
  //   async: true
  // })
}
