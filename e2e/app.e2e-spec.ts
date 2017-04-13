import { PortfoliomcstPage } from './app.po';

describe('portfoliomcst App', () => {
  let page: PortfoliomcstPage;

  beforeEach(() => {
    page = new PortfoliomcstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
