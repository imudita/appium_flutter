import {config} from './wdio.conf.ts';
import {CustomWorld} from "../src/worlds/app_world.ts";

config.capabilities = [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Pixel_2_API_24',
    'appium:app': '../build/app/outputs/flutter-apk/app-debug.apk',
    'appium:appPackage': 'com.example.appium_flutter',
    'appium:appActivity': '.MainActivity',
}];

config.cucumberOpts?.require?.push('./src/worlds/*.ts');
config.beforeScenario = (world, appWold: CustomWorld) => {
    console.log(`world: ${world.pickle.name}`);
    console.log(`appWold: ${appWold.someProperty}`);
};
export {config};