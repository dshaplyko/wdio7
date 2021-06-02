import Page from "./page";
import Thumbnails from "../components/thumbnails.component";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OurProductsPage extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to submit the form
   */

  get thumbnails() {
    return new Thumbnails();
  }

  /**
   * overwrite specifc options to adapt idiv-main-navdiv-main-navt to page object
   */
  open() {
    return super.open("Page-Object-Model/products.html");
  }

  async isPageOpened(): Promise<boolean> {
    return super.isPageOpened("products");
  }
}

export default new OurProductsPage();
