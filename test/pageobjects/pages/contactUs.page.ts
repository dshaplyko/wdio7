import Page from "./page";
import { Element } from "../../helpers/element";
import submitForm from "../../interfaces/interfaces";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactUsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputFirstName(): WebdriverIO.Element {
    return $("input[name='first_name']");
  }
  get inputLastName(): WebdriverIO.Element {
    return $("input[name='last_name']");
  }
  get inputEmail(): WebdriverIO.Element {
    return $("input[name='email']");
  }
  get inputComments(): WebdriverIO.Element {
    return $("textarea[name='message']");
  }
  get buttonReset(): WebdriverIO.Element {
    return $("input[type='reset']");
  }
  get buttonSubmit(): WebdriverIO.Element {
    return $("input[type='submit']");
  }
  get messageSuccess(): WebdriverIO.Element {
    return $("#contact_reply");
  }
  get errorMessage(): WebdriverIO.Element {
    return $("body");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to submit the form
   */

  async submitForm(submitForm: submitForm, button: string): Promise<void> {
    await Element.setValue(this.inputFirstName, submitForm.firstName);
    await Element.setValue(this.inputLastName, submitForm.lastName);
    await Element.setValue(this.inputEmail, submitForm.email);
    await Element.setValue(this.inputComments, submitForm.comments);

    if (button === "reset") {
      await Element.click(this.buttonReset);
    } else if (button === "submit") {
      await Element.click(this.buttonSubmit);
    } else {
      return;
    }
  }

  async isMessageSuccessVisible(): Promise<boolean> {
    return (await this.messageSuccess).isDisplayed();
  }

  async messageSuccessText(): Promise<string> {
    return Element.getText(this.messageSuccess);
  }

  async checkFormData(): Promise<String[]> {
    return Element.getValueArray([
      await this.inputEmail,
      await this.inputFirstName,
      await this.inputLastName,
      await this.inputComments,
    ]);
  }

  async getErrorText(): Promise<string> {
    return Element.getText(this.errorMessage);
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("Contact-Us/contactus.html");
  }

  async isPageOpened(): Promise<boolean> {
    return super.isPageOpened("contactus");
  }
}

export default new ContactUsPage();
