import { Waiter } from "./waiter";

export class Element {

  public static async click(el: WebdriverIO.Element) {
    await Waiter.waitForClickable(el);
    await (await el).click();
  }
  public static async getText(el): Promise<string> {
    await Waiter.waitForExist(el);
    return (await (await el).getText());
  }

  // public static async getTextArray(locator: string): Promise<string[]> {
  //   await Waiter.waitForExist(locator);
  //   const elNumber: number = (await $$(locator)).length;
  //   const textArr: string[] = [];
  //   for (let i: number = 0; i < elNumber; i++) {
  //     textArr.push(await (await $$(locator))[i].getText());
  //   }
  //   return textArr;
  // }

  // public static async isSelected(locator: string): Promise<boolean> {
  //   await Waiter.waitForExist(locator);
  //   return (await (await $(locator)).isSelected());
  // }

  // public static async isDisplayed(locator: string): Promise<boolean> {
  //   await Waiter.waitForExist(locator);
  //   return (await (await $(locator)).isDisplayed());
  // }

  // public static async isExisted(locator: string): Promise<boolean> {
  //   await Waiter.waitForExist(locator);
  //   return (await (await $(locator)).isExisting());
  // }

  // public static async setValue(locator: string, value: string) {
  //   await Waiter.waitForExist(locator);
  //   await (await (await $(locator)).setValue(value));
  // }
}
