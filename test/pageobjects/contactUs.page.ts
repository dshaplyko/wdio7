import Page from './page';
import {Element} from '../helpers/element'
import submitForm from '../interfaces/interfaces'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactUsPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get inputFirstName() { return $("input[name='first_name']") }
	get inputLastName() { return $("input[name='last_name']") }
	get inputEmail() { return $('#password') }
  get inputComments() { return $('#password') }

	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to login using username and password
	 */
  
	async submitForm(submitForm: submitForm): Promise<void> {
    await Element.setValue(await this.inputFirstName, submitForm.firstName);
		await Element.setValue(await this.inputLastName, submitForm.lastName);
	}

	/**
	 * overwrite specifc options to adapt it to page object
	 */
	open() {
		return super.open('Contact-Us/contactus.html');
	}
}

export default new ContactUsPage();