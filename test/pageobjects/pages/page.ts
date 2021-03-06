import Modal from "../components/modal.component";
import NavigationBar from "../components/navBar.component";
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  open(path: string) {
    return browser.url(path);
  }

  get modal() {
    return new Modal();
  }

  get navigationBar() {
    return new NavigationBar();
  }

  async isPageOpened(url: string): Promise<boolean> {
    const currentUrl = await browser.getUrl();
    return currentUrl.includes(url);
  }
}
