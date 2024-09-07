const { Builder } = require('selenium-webdriver');
const VehicleDataPage = require('../Pages/vehicleDataPage');
const { expect } = require('chai');

describe('Vehicle Data Form', function () {
    this.timeout(30000);
    let driver;
    let vehicleDataPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        vehicleDataPage = new VehicleDataPage(driver);
        await driver.get('http://sampleapp.tricentis.com/101/app.php');
    });

    after(async () => {
        await driver.quit();
    });
this.tests
    it('should validate and fill the form on "Enter Vehicle Data"', async () => {
        // Validações
        const isMakeValid = await vehicleDataPage.validateMakeField();
        const isEnginePerformanceValid = await vehicleDataPage.validateEnginePerformanceField();
        expect(isMakeValid).to.be.false;
        expect(isEnginePerformanceValid).to.be.false;

        // Preencher campos
        await vehicleDataPage.selectMake('Honda');
        await vehicleDataPage.enterEnginePerformance('1200');

        // Validação pós preenchimento
        const isMakeValidAfter = await vehicleDataPage.validateMakeField();
        const isEnginePerformanceValidAfter = await vehicleDataPage.validateEnginePerformanceField();
        expect(isMakeValidAfter).to.be.true;
        expect(isEnginePerformanceValidAfter).to.be.true;

        // Clicar em next
        await vehicleDataPage.clickNext();
    });
});

await driver.takeScreenshot().then((data) => {
  require('fs').writeFileSync('screenshot.png', data, 'base64');
});
