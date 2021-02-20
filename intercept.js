const {
	remote
} = require('webdriverio')
const path = require('path')


let browser;

(async () => {

	// const profile_dir = path.join(__dirname, 'profile')

	browser = await remote({
		capabilities: {
			browserName: 'firefox',
			'moz:firefoxOptions': {
				args: [
					// "-profile", profile_dir,
				]
			},
		},
		services: ['geckodriver'],
	})

	/*
	As per OP's comment an easier approach would be to tweak the following Key-Value within about:config which solves the issue:
	security.csp.enable    off
	*/

	await browser.url('https://gmail.com')
	console.warn('-----new window-----');
	await browser.url('https://github.com')

	// continue with WebDriver commands
	// await browser.pause(2000)
	// await browser.refresh()
	// await browser.deleteSession()

})().catch(async (e) => {
	console.error(e)
	// await browser.deleteSession()
})