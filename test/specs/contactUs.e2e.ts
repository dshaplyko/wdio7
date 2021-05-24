import ContactUsPage from '../pageobjects/contactUs.page';
import { expect } from 'chai';
const data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'John_Doe@gmail.com',
  comments: 'This is the field where I supposed to write some comments'
};

describe('Contact Us Page', () => {

  beforeEach(() => {
    ContactUsPage.open();
  });

  it('should submit the Contact Us form', async () => {
    await ContactUsPage.submitForm(data, 'submit');
    expect(await browser.getUrl()).to.include('contact-form-thank-you');
    expect(await ContactUsPage.isMessageSuccessVisible()).to.equal(true);
    expect(await ContactUsPage.messageSuccessText()).to.equal('Thank You for your Message!');
  });

  it('should reset the Contact Us form', async () => {
    await ContactUsPage.submitForm(data, 'reset');
    expect(await browser.getUrl()).to.include('contactus');
    expect(await ContactUsPage.isMessageSuccessVisible()).to.equal(false);
    /**
     * verify whether all inputs are empty
     */
    (await ContactUsPage.checkFormData()).forEach(item => expect(item).to.equal(''));
  });
  
});