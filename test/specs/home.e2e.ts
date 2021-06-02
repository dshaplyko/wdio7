import HomePage from "../pageobjects/pages/home.page";
import ContactUsPage from "../pageobjects/pages/contactUs.page";
import { expect } from "chai";

describe("Home Page", () => {
  beforeEach(() => HomePage.open());

  it("should open Contact Us page", async () => {
    await HomePage.navigationBar.clickContactUs();
    expect(await ContactUsPage.isPageOpened()).to.equal(true);
  });

  it("should contain thumbnails", async () => {
    const count = await HomePage.thumbnails.getThumbnailsCount();
    expect(count).to.be.above(0);
  });

  it("each of the thumbnails should contain title", async () => {
    const titles = await HomePage.thumbnails.getThumbnailsTitles();
    titles.forEach((title) => expect(title).not.to.equal(""));
  });

  it("should open a modal after clicking Find out button", async () => {
    await HomePage.thumbnails.clickFindOut();
    expect(await HomePage.modal.isModalDisplayed()).to.equal(true);
    expect(await HomePage.modal.getTitleModal()).to.equal("Welcome to webdriveruniversity.com");
  });

  it("modal should contain the text", async () => {
    await HomePage.thumbnails.clickFindOut();
    expect(await HomePage.modal.getBodyModal()).to.include("Welcome to webdriveruniversity.com");
  });

  it("should close the modal by clicking Close button", async () => {
    await HomePage.thumbnails.clickFindOut();
    await HomePage.modal.clickButtonClose();
    expect(await HomePage.modal.isModalDisplayed(true)).to.equal(false);
  });
});
