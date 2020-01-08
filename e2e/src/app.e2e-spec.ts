import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Application de gestion de compétences Ausy');
  });

  it('should display application title', () => {
    page.navigateTo();
    expect(page.getAppTitleText()).toEqual('Ausy Skills Application');
  });

  it('should display user list title', () => {
    page.navigateToUrl('/users');
    expect(page.getPageTitleByDivHeader()).toEqual('Liste des utilisateurs');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
