import { NgMeetAndGitPage } from './app.po';

describe('ng-meet-and-git App', () => {
  let page: NgMeetAndGitPage;

  beforeEach(() => {
    page = new NgMeetAndGitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
