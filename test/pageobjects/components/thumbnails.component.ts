import { Element } from "../../helpers/element";

export default class Thumbnails {
  readonly el: string = ".thumbnail";

  constructor(el?: string) {
    if (el !== undefined) {
      this.el = el;
    }
  }

  async getButtonFindOut(index: number): Promise<WebdriverIO.Element> {
    return (await $$(this.el))[index - 1].$("#button-find-out-more");
  }

  async clickFindOut(): Promise<void> {
    await (await this.getButtonFindOut(1)).click();
  }

  async getThumbnailsCount(): Promise<Number> {
    return (await $$(this.el)).length;
  }

  async getThumbnailsTitles(): Promise<string[]> {
    return Element.getTextArray(
      await $$(`${this.el} .section-title .sub-heading`)
    );
  }

  async clickThumbnail(index: number): Promise<void> {
    const item = (await $$(this.el))[index - 1];
    await Element.click(item);
  }
}
