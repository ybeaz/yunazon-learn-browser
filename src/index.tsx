import { initializeBrowserApp } from './initializeBrowserApp'

window.addEventListener('load', function () {
  // @ts-expect-error
  document.getElementById('root').innerHTML = ''
  setTimeout(() => {
    document.getElementsByTagName('body')[0].style.visibility = 'visible'
  }, 1000)
  initializeBrowserApp()
  document.getElementsByTagName('body')[0].style.visibility = 'visible'
})
