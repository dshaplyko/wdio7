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
	get inputEmail() { return $("input[name='email']") }
  get inputComments() { return $("textarea[name='message']") }
  get buttonReset() { return $("input[type='reset']") }
  get buttonSubmit() { return $("input[type='submit']") }

	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to submit the form
	 */
  
	async submitForm(submitForm: submitForm, button: string): Promise<void> {
    await Element.setValue(this.inputFirstName, submitForm.firstName);
		await Element.setValue(this.inputLastName, submitForm.lastName);
    await Element.setValue(this.inputEmail, submitForm.email);
    await Element.setValue(this.inputComments, submitForm.comments);

    if (button === 'reset') {
      await Element.click(this.buttonReset);
    } else {
      await Element.click(this.buttonSubmit);
    }
    
	}

	/**
	 * overwrite specifc options to adapt it to page object
	 */
	open() {
		return super.open('Contact-Us/contactus.html');
	}
}

export default new ContactUsPage();