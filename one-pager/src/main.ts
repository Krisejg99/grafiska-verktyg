// Import our styles
import './main.scss'

// Import all of Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.js'

// div
const homePageEl = document.querySelector('#home-page') as HTMLDivElement
const reportContainerEl = document.querySelector('#report-container') as HTMLDivElement
const afterReportContainerEl = document.querySelector('#after-report') as HTMLDivElement

// form
const reportTreeBtnEl = document.querySelector('#report-tree-btn') as HTMLButtonElement
const sendFormBtnEl = document.querySelector('#send-form-btn') as HTMLButtonElement
const homePageBtnEl = document.querySelector('#home-page-btn') as HTMLButtonElement

// repoprt tree
reportTreeBtnEl.addEventListener('click', () => {
	homePageEl.classList.add('hide')
	reportContainerEl.classList.remove('hide')
	window.scrollTo(0, 0);
})

// send report
sendFormBtnEl.addEventListener('click', () => {
	reportContainerEl.classList.add('hide')
	afterReportContainerEl.classList.remove('hide')
	window.scrollTo(0, 0);
})

// homepage
homePageBtnEl.addEventListener('click', () => {
	afterReportContainerEl.classList.add('hide')
	homePageEl.classList.remove('hide')
	window.scrollTo(0, 0);
})
