// Import our styles
import './main.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.js'

const homePageEl = document.querySelector('#home-page') as HTMLDivElement
const reportEl = document.querySelector('#report') as HTMLDivElement
const reportTreeBtnEl = document.querySelector('#report-tree-btn') as HTMLDivElement

reportTreeBtnEl.addEventListener('click', () => {
	homePageEl.classList.add('hide')
	reportEl.classList.remove('hide')
})
