import {config} from './wdio.conf.ts';

config.capabilities = [{
    platformName: 'Android',
    browserName: 'Chrome',
    'appium:deviceName': 'Pixel_7_API_34',
    'appium:automationName': 'UiAutomator2'
}];

export {config};