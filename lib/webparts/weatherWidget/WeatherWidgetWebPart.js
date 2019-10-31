var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'WeatherWidgetWebPartStrings';
import WeatherWidget from './components/WeatherWidget';
var WeatherWidgetWebPart = /** @class */ (function (_super) {
    __extends(WeatherWidgetWebPart, _super);
    function WeatherWidgetWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeatherWidgetWebPart.prototype.render = function () {
        var element = React.createElement(WeatherWidget, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    WeatherWidgetWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(WeatherWidgetWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    WeatherWidgetWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return WeatherWidgetWebPart;
}(BaseClientSideWebPart));
export default WeatherWidgetWebPart;
//# sourceMappingURL=WeatherWidgetWebPart.js.map