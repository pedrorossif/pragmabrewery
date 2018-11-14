import { PragmabreweryDeployPage } from './app.po';

describe('pragmabrewery-deploy App', function() {
  let page: PragmabreweryDeployPage;

  beforeEach(() => {
    page = new PragmabreweryDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
