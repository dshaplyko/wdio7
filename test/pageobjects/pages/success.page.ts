import Page from './page';
import { Element } from '../../helpers/element'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SuccessPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get messageSuccess(): WebdriverIO.Element { return $("#contact_reply") }
	
	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to submit the form
	 */

	async isMessageSuccessVisible(): Promise<boolean> {
		return (await this.messageSuccess).isDisplayed();
	}

	async messageSuccessText(): Promise<string> {
		return Element.getText(this.messageSuccess);
	}

	/**
	 * overwrite specifc options to adapt it to page object
	 */
	async isPageOpened(): Promise<boolean> {
		return super.isPageOpened('contact-form-thank-you');
	}
}

export default new SuccessPage();