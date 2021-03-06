describe('PhoneCat controllers', function () {
  describe('Phone list view', function() {

    beforeEach(function() {
	browser.get('http://localhost/tdd/step1/index.html');
    });

    it('should filter the phone list as user types into the search box', function() {
	expect(element.all(by.css('.phones li')).count()).toBe(3);

	element(by.model('query')).sendKeys('nexus');
	expect(element.all(by.css('.phones li')).count()).toBe(1);
	
	element(by.model('query')).clear();
	element(by.model('query')).sendKeys('motorola');
	expect(element.all(by.css('.phones li')).count()).toBe(2);
    });
  });
});