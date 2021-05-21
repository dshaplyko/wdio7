import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import { expect } from 'chai';

describe('My Login application', () => {
	it('should login with valid credentials', async () => {
		await LoginPage.open();
		await LoginPage.login('tomsmith', 'SuperSecretPassword!');
		expect(await SecurePage.flashAlert).to.exist;
		expect(await SecurePage.getText()).to.include('You logged into a secure area!');
	});
});