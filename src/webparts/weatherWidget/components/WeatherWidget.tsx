import * as React from 'react';
import styles from './WeatherWidget.module.scss';
import { IWeatherWidgetProps } from './IWeatherWidgetProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class WeatherWidget extends React.Component<IWeatherWidgetProps, {}> {
  private getLatLong(){
    return  "28.643999,77.091003"
  }
  public render(): React.ReactElement<IWeatherWidgetProps> {
    let latlong = this.getLatLong();
    let lat = latlong.split(",")[0];
    let long = latlong.split(",")[1];
    return (
      <div className={ styles.weatherWidget }>
        <div className={ styles.container }>
        <article className={styles.widget}>
          <div className={styles.weatherIcon}><i className="wi wi-day-cloudy"></i></div>
          <div className={styles.weatherInfo}>
            <div className={styles.temperature}><span>25&deg;</span></div>
            <div className={styles.description}>    
              <div className={styles.weatherCondition}>CLOUDY</div>    
              <div className={styles.place}>New York, New York</div>
            </div>
          </div>
          <div className={styles.date}>1st Jan</div>
        </article>
        </div>
      </div>
    );
  }
}
