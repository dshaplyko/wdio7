export enum ActionKeys {
  arrowDown = 'ArrowDown',
  arrowUp = 'ArrowUp',
  enter = 'Enter',
  tab = 'Tab',
  esc = 'Escape',
}

export class Actions {

  public static async rightClick(locator: string) {
      await (await $(locator)).click({ button: 'right' })
  }

  public static async moveToElement(locator: string) {
      await (await $(locator)).moveTo()
  }

  public static async moveToElementByIndex(locator: string, index: number) {
      await (await $$(locator))[index].moveTo()
  }

  public static async arrowDown() {
      await browser.keys(ActionKeys.arrowDown);
  }

  public static async arrowUp() {
      await browser.keys(ActionKeys.arrowUp);
  }

  public static async enter() {
      await browser.keys(ActionKeys.enter);
  }

  public static async tab() {
      await browser.keys(ActionKeys.tab);
  }

  public static async esc() {
      await browser.keys(ActionKeys.esc);
  }
}
