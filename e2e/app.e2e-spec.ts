import { FirstComponentsPage } from './app.po';

describe('first-components App', () => {
  let page: FirstComponentsPage;

  beforeEach(() => {
    page = new FirstComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
