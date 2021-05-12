import { initializeBrowserApp } from './initializeBrowserApp'

window.addEventListener('load', function () {
  initializeBrowserApp()
  document.getElementsByTagName('body')[0].style.visibility = 'visible'
})
