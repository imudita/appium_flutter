const {remote} = require('webdriverio');

const capabilities = process.env.APPIUM_OS === 'android' ? {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Pixel_7_API_34',
    // 'appium:app': __dirname + '/../apps/app-debug.apk',
    'appium:appPackage': 'com.example.appium_flutter',
    'appium:appActivity': '.MainActivity',
    'appium:noReset': true,
} : process.env.APPIUM_OS === 'ios' ? {
    'platformName': 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:platformVersion': '17.0',
    'appium:deviceName': 'iPhone 15',
    'appium:udid': '7E9C6AA8-0276-45D3-A55E-FC970D41A668',
    // 'appium:app': __dirname + '/../apps/Runner.zip',
    'appium:bundleId': 'com.example.appiumFlutter',
    'appium:noReset': true,
} : {};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
};

async function runTest() {
    const driver = await remote(wdOpts);
    // Check the text counter is '0'
    const text0 = await driver.$('~counterText0');
    await text0.isDisplayed();
    // click on increment button
    const button = await driver.$('~incrementButton');
    await button.click();
    // wait for text counter was changed from '0'
    await text0.waitForExist({reverse: true})
    const text1 = await driver.$('~counterText1');
    await text1.isDisplayed();
}

runTest().catch(console.error);