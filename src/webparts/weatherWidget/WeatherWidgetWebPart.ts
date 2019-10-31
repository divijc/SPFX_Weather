import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'WeatherWidgetWebPartStrings';
import WeatherWidget from './components/WeatherWidget';
import { IWeatherWidgetProps } from './components/IWeatherWidgetProps';

export interface IWeatherWidgetWebPartProps {
  description: string;
}

export default class WeatherWidgetWebPart extends BaseClientSideWebPart<IWeatherWidgetWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWeatherWidgetProps > = React.createElement(
      WeatherWidget,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
