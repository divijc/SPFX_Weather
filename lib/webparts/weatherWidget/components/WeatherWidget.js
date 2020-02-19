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
import styles from './WeatherWidget.module.scss';
var WeatherWidget = /** @class */ (function (_super) {
    __extends(WeatherWidget, _super);
    function WeatherWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeatherWidget.prototype.render = function () {
        return (React.createElement("div", { className: styles.weatherWidget },
            React.createElement("div", { className: styles.container },
                React.createElement("article", { className: styles.widget },
                    React.createElement("div", { className: styles.weatherIcon },
                        React.createElement("i", { className: "wi wi-day-cloudy" })),
                    React.createElement("div", { className: styles.weatherInfo },
                        React.createElement("div", { className: styles.temperature },
                            React.createElement("span", null, "25\u00B0")),
                        React.createElement("div", { className: styles.description },
                            React.createElement("div", { className: styles.weatherCondition }, "CLOUDY"),
                            React.createElement("div", { className: styles.place }, "New York, New York"))),
                    React.createElement("div", { className: styles.date }, "1st Jan")))));
    };
    return WeatherWidget;
}(React.Component));
export default WeatherWidget;
//# sourceMappingURL=WeatherWidget.js.map