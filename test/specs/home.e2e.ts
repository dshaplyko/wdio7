import HomePage from '../pageobjects/pages/home.page';
import ContactUsPage from '../pageobjects/pages/contactUs.page';
import { expect } from 'chai';

describe('Home Page', () => {

  beforeEach(() => HomePage.open());

  it('should open Contact Us page', async () => {
    await HomePage.navigationBar.clickContactUs();
    expect(await ContactUsPage.isPageOpened()).to.equal(true);
  });

});