import {config} from './wdio.conf.ts';

config.capabilities = [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:platformVersion': '17.0',
    'appium:deviceName': 'iPhone 15',
    // 'appium:app': '../apps/Runner.zip',
    'appium:bundleId': 'com.example.appiumFlutter',
}];

export {config};