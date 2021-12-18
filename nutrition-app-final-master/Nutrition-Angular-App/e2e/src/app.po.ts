import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
  IsHeaderPresent(){
    return element(by.tagName('app-header')).isPresent();
  }
  IsFooterPresent(){
    return element(by.tagName('app-footer')).isPresent();
  }
  IsCardsPresent(){
    return element(by.tagName('app-cards')).isPresent();
  }
}
