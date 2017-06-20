import { S5a2Page } from './app.po';

describe('s5a2 App', () => {
  let page: S5a2Page;

  beforeEach(() => {
    page = new S5a2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
