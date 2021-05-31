import Page from "./page";
import NavigationBar from "../components/navBar.component";
import Thumbnails from "../components/thumbnails.component";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to submit the form
   */
  get navigationBar() {
    return new NavigationBar();
  }

  get thumbnails() {
    return new Thumbnails();
  }

  /**
   * overwrite specifc options to adapt idiv-main-navdiv-main-navt to page object
   */
  open() {
    return super.open("Page-Object-Model/index.html");
  }

  async isPageOpened(): Promise<boolean> {
    return super.isPageOpened("products");
  }
}

export default new HomePage();
