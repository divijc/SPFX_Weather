import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IWeatherWidgetWebPartProps {
    description: string;
}
export default class WeatherWidgetWebPart extends BaseClientSideWebPart<IWeatherWidgetWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=WeatherWidgetWebPart.d.ts.map