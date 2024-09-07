const { By, until } = require('selenium-webdriver');

class VehicleDataPage {
  constructor(driver) {
    this.driver = driver;
  }

  async selectMake(make) {
    await this.driver.findElement(By.id('make')).sendKeys(make);
  }

  async setEnginePerformance(performance) {
    await this.driver.findElement(By.id('engineperformance')).sendKeys(performance);
  }

  async isMakeSelected(expectedMake) {
    const makeValue = await this.driver.findElement(By.id('make')).getAttribute('value');
    return makeValue === expectedMake;
  }

  async isEnginePerformanceFilled(expectedPerformance) {
    const performanceValue = await this.driver.findElement(By.id('engineperformance')).getAttribute('value');
    return performanceValue === expectedPerformance;
  }

  async preencherFormulario(make, performance) {
    await this.selectMake(make);
    await this.setEnginePerformance(performance);
  }

  async clickNext() {
    await this.driver.findElement(By.id('nextenterinsurantdata')).click();
  }
}

module.exports = VehicleDataPage;
