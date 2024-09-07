const { By } = require('selenium-webdriver');

class InsurantDataPage {
  constructor(driver) {
    this.driver = driver;
  }

  async setFirstName(firstName) {
    await this.driver.findElement(By.id('firstname')).sendKeys(firstName);
  }

  async setLastName(lastName) {
    await this.driver.findElement(By.id('lastname')).sendKeys(lastName);
  }

  async preencherFormulario(firstName, lastName) {
    await this.setFirstName(firstName);
    await this.setLastName(lastName);
  }

  async clickNext() {
    await this.driver.findElement(By.id('nextenterproductdata')).click();
  }
}

module.exports = InsurantDataPage;
