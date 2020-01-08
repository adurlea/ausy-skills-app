import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToUrl(url: string) {
    return browser.get(url) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  getAppTitleText() {
    return element(by.css('app-skills-root h1')).getText() as Promise<string>;
  }

  getPageTitleByDivHeader() {
    return element.all(by.css('div .header')).get(3).getText();
  }
}
