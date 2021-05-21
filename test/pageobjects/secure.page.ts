import Page from './page';
import {Element} from '../helpers/element'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
	/**
	 * define selectors using getter methods
	 */
	public get flashAlert(): WebdriverIO.Element { return $('#flash') }

	async getText(): Promise<string> {
		return Element.getText(await this.flashAlert);
	}
}

export default new SecurePage();
