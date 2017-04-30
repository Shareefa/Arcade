import { ArcadePage } from './app.po';

describe('arcade App', () => {
  let page: ArcadePage;

  beforeEach(() => {
    page = new ArcadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
