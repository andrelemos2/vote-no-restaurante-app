'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('vote-no-restaurante-app', function() {


  it('should automatically redirect to /voting when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('voting', function() {

    beforeEach(function() {
      browser.get('index.html#/voting');
    });


    it('should render view1 when user navigates to /voting', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('ranking', function() {

    beforeEach(function() {
      browser.get('index.html#/ranking');
    });


    it('should render ranking when user navigates to /ranking', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for ranking/);
    });

  });
});
