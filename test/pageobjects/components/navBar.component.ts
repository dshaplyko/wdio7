import { Element } from "../../helpers/element";

export default class NavigationBar {
  readonly el: WebdriverIO.Element = $("#div-main-nav");

  constructor(el?: WebdriverIO.Element) {
    if (el !== undefined) {
      this.el = el;
    }
  }

  async getButtonHome(): Promise<WebdriverIO.Element> {
    return (await this.el).$("a[href*='products']");
  }

  async getButtonOurProducts(): Promise<WebdriverIO.Element> {
    return (await this.el).$("a[href*='products']");
  }

  async getButtonContactUs(): Promise<WebdriverIO.Element> {
    return (await this.el).$("a[href*='contactus']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to submit the form
   */
  async clickHome(): Promise<void> {
    await Element.click(await this.getButtonHome());
  }

  async clickContactUs(): Promise<void> {
    await Element.click(await this.getButtonContactUs());
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
}
