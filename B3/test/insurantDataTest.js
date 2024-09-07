const { Builder } = require('selenium-webdriver');
const InsurantDataPage = require('../Pages/insurantDataPage');
const { expect } = require('chai');

describe('Insurant Data Form', function () {
    this.timeout(30000);
    let driver;
    let insurantDataPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        insurantDataPage = new InsurantDataPage(driver);
        await driver.get('http://sampleapp.tricentis.com/101/app.php');
    });

    after(async () => {
        await driver.quit();
    });

    it('should fill the form on "Enter Insurant Data"', async () => {
        await insurantDataPage.enterFirstName('Bruno');
        await insurantDataPage.enterLastName('Camargo');
        await insurantDataPage.clickNext();
    });
});

await driver.takeScreenshot().then((data) => {
    require('fs').writeFileSync('screenshot.png', data, 'base64');
});
