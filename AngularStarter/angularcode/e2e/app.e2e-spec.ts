import { AngularcodePage } from './app.po';

describe('angularcode App', () => {
  let page: AngularcodePage;

  beforeEach(() => {
    page = new AngularcodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
