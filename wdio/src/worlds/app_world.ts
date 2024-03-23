import {setWorldConstructor, World} from "@wdio/cucumber-framework";

export class CustomWorld extends World{
  public someProperty: string = 'Hello World';
}

setWorldConstructor(CustomWorld);