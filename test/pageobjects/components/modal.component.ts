import { Waiter, Element } from "../../helpers";

export default class Modal {
  readonly el: string = ".modal-md";

  constructor(el?: string) {
    if (el !== undefined) {
      this.el = el;
    }
  }

  get title(): WebdriverIO.Element {
    return $(`${this.el} .modal-title`);
  }

  get body(): WebdriverIO.Element {
    return $(`${this.el} .modal-body p`);
  }

  get buttonClose(): WebdriverIO.Element {
    return $(`${this.el} .modal-footer .btn:nth-child(2)`);
  }

  async getTitleModal(): Promise<string> {
    const title = await await this.title;
    await Waiter.waitForDisplayed(title);
    return Element.getText(title);
  }

  async getBodyModal(): Promise<string> {
    const body = await await this.body;
    await Waiter.waitForDisplayed(body);
    return Element.getText(body);
  }

  async isModalDisplayed(reverse?: boolean): Promise<boolean> {
    await Waiter.waitForDisplayed(await $(this.el), reverse);
    return (await $(this.el)).isDisplayed();
  }

  async clickButtonClose(): Promise<void> {
    const button = await await this.buttonClose;
    await Waiter.waitForDisplayed(button);
    return Element.click(button);
  }
}
