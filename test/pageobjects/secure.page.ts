import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get flashAlert() { return $('#flash') }

	async getText(): Promise<string> {
		//await browser.pause(3000);
		return (await (await this.flashAlert).getText());
	}
}

export default new SecurePage();
