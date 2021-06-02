import { Waiter } from "./waiter";

export class Element {
  public static async click(el: WebdriverIO.Element) {
    await Waiter.waitForClickable(el);
    await (await el).click();
  }
  public static async getText(el): Promise<string> {
    await Waiter.waitForExist(el);
    return await (await el).getText();
  }

  public static async getTextArray(el: WebdriverIO.Element[]): Promise<string[]> {
    await Waiter.waitForExist(el[0]);
    const elNumber: number = (await el).length;
    const textArr: string[] = [];
    for (let i: number = 0; i < elNumber; i++) {
      textArr.push(await (await el)[i].getText());
    }
    return textArr;
  }

  public static async getValueArray(el: WebdriverIO.Element[]): Promise<string[]> {
    await Waiter.waitForExist(el[0]);
    const elNumber: number = (await el).length;
    const textArr: string[] = [];
    for (let i: number = 0; i < elNumber; i++) {
      textArr.push(await (await el)[i].getValue());
    }
    return textArr;
  }

  public static async isSelected(el: WebdriverIO.Element): Promise<boolean> {
    await Waiter.waitForExist(el);
    return await (await el).isSelected();
  }

  public static async isDisplayed(el: WebdriverIO.Element): Promise<boolean> {
    await Waiter.waitForExist(el);
    return (await el).isDisplayed();
  }

  public static async isExisted(el: WebdriverIO.Element): Promise<boolean> {
    await Waiter.waitForExist(el);
    return await (await el).isExisting();
  }

  public static async setValue(el: WebdriverIO.Element, value: string): Promise<void> {
    await Waiter.waitForExist(el);
    return await (await el).setValue(value);
  }
}
