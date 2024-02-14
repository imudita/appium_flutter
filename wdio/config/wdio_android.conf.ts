import {config} from './wdio.conf.ts';

config.capabilities = [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Pixel_7_API_34',
    // 'appium:app': '/../apps/app-debug.apk',
    'appium:appPackage': 'com.example.appium_flutter',
    'appium:appActivity': '.MainActivity',
}];

export {config};