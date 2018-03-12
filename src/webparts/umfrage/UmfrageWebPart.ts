import 'reflect-metadata';

import * as strings from 'UmfrageWebPartStrings';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import { AppModule } from './app/app.module';
import { Version } from '@microsoft/sp-core-library';
import { escape } from '@microsoft/sp-lodash-subset';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import styles from './UmfrageWebPart.module.scss';

require('zone.js');


export interface IUmfrageWebPartProps {
  description: string;
}

export default class UmfrageWebPart extends BaseClientSideWebPart<IUmfrageWebPartProps> {

  public render(): void {
    // window['webPartContext'] = this.context;
    this.domElement.innerHTML = '<spapp-root>>Loading..</spapp-root>';
    platformBrowserDynamic().bootstrapModule(AppModule);
  }
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
