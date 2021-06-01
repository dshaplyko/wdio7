import { Waiter, Element } from "../../helpers";

export default class Modal {
  readonly el: WebdriverIO.Element = $(".modal-md");

  constructor(el?: WebdriverIO.Element) {
    if (el !== undefined) {
      this.el = el;
    }
  }

  async getTitle(): Promise<WebdriverIO.Element> {
    return (await this.el).$(".modal-title");
  }

  async getTitleModal(): Promise<string> {
    const el = await this.getTitle();
    await Waiter.waitForDisplayed(el);
    return Element.getText(el);
  }
}
