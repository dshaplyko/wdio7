import { Timeouts } from "../config/timeouts";

export class Waiter {
  public static async waitForExist(el: WebdriverIO.Element, maxWaitTime: number = Timeouts.max) {
    try {
      await (await el).waitForExist({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`Time for waiting element '${el}' is out, element still not exist`);
      }
      else {
        throw e;
      }
    }
  };

  public static async waitForDisplayed(el: WebdriverIO.Element, maxWaitTime: number = Timeouts.max) {
    try {
      await (await el).waitForDisplayed({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`Time for waiting element '${el}' is out, element still not enabled`);
      }
      else {
        throw e;
      }
    }
  };

  public static async waitForEnabled(el: WebdriverIO.Element, maxWaitTime: number = Timeouts.max) {
    try {
      await (await el).waitForEnabled({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`Time for waiting element '${el}' is out, element still not displayed`);
      }
      else {
        throw e;
      }
    }
  };

  public static async waitForClickable(el: WebdriverIO.Element, maxWaitTime: number = Timeouts.max) {
    try {
      await (await el).waitForClickable({ timeout: maxWaitTime });
    } catch (e) {
      if (e.name === 'TimeoutError') {
        throw new Error(`Time for waiting element '${el}' is out, element still not clickable`);
      }
      else {
        throw e;
      }
    }
  };
}
