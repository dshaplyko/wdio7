import ContactUsPage from '../pageobjects/contactUs.page';
import { expect } from 'chai';

describe('Contact Us Page', () => {
	it('should submit Contact Us form', async () => {
		ContactUsPage.open();
    await ContactUsPage.submitForm({
      firstName: 'first',
      lastName: 'second',
      email: 'aa',
      comments: 'aa'
    })
    await browser.pause(5000);
	});
});