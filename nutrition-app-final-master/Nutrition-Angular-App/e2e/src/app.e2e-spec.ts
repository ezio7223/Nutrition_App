import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('a header element must be present in the page',()=>{
    page.navigateTo();
    expect(page.IsHeaderPresent()).toBeTruthy();

  })
  it('a footer element must be present in the page',()=>{
    page.navigateTo();
    expect(page.IsFooterPresent()).toBeTruthy();
  })
  it('a cards element must be present in the page',()=>{
    page.navigateTo();
    expect(page.IsCardsPresent()).toBeTruthy();
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
