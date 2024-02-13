import {config} from './wdio.conf.ts';

config.capabilities = [{
    platformName: 'iOS',
    browserName: 'Safari',
    'appium:deviceName': 'iPhone 15',
    'appium:platformVersion': '17.0',
    'appium:automationName': 'XCUITest'
}];

export {config};
