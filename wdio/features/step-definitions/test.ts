import {Given, Then, When} from"@cucumber/cucumber";
import { driver } from '@wdio/globals'

Given('Open the app', {}, async () => {
  // Check the text counter is '0'
  const text0 = await driver.$('~counterText0');
  await text0.isDisplayed();
});

When('Click on plus button', {}, async () => {
  // Check the text counter is '0'
  const text0 = await driver.$('~counterText0');
  await text0.isDisplayed();
  // click on increment button
  const button = await driver.$('~incrementButton');
  await button.click();
  // wait for text counter was changed from '0'
  await text0.waitForExist({reverse: true});
});

Then('The value increase', {}, async () => {
  const text1 = await driver.$('~counterText1');
  await text1.isDisplayed();
});