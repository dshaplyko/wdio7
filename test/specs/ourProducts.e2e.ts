import OurProductsPage from "../pageobjects/pages/ourProducts.page";
import { expect } from "chai";

describe("Our Products Page", () => {
  beforeEach(() => OurProductsPage.open());

  it("should click thumbnails", async () => {
    const thumbnailsNumber =
      await OurProductsPage.thumbnails.getThumbnailsCount();

    for (let i = 1; i <= thumbnailsNumber; i++) {
      await OurProductsPage.thumbnails.clickThumbnail(i);
      expect(await OurProductsPage.modal.isModalDisplayed()).to.equal(true);
      await OurProductsPage.modal.clickButtonClose();
      expect(await OurProductsPage.modal.isModalDisplayed(true)).to.equal(
        false
      );
    }
  });
});
