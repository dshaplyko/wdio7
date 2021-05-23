import ContactUsPage from '../pageobjects/contactUs.page';
import { expect } from 'chai';

describe('Contact Us Page', () => {
	it('should submit Contact Us form', async () => {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'John_Doe@gmail.com',
      comments: 'This is the filed where I supposed to write some comments'
    };

		ContactUsPage.open();
    await ContactUsPage.submitForm(data, 'submit');
    await browser.pause(5000);
	});
});