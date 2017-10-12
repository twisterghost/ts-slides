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
System.register("Slides", ["react"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, Slides;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            Slides = /** @class */ (function (_super) {
                __extends(Slides, _super);
                function Slides() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Slides.prototype.render = function () {
                    return React.createElement("div", null, "Hello, world!");
                };
                return Slides;
            }(React.Component));
            exports_1("default", Slides);
        }
    };
});
System.register("Main", ["react", "react-dom", "Slides"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var React, ReactDOM, Slides_1;
    return {
        setters: [
            function (React_2) {
                React = React_2;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (Slides_1_1) {
                Slides_1 = Slides_1_1;
            }
        ],
        execute: function () {
            ReactDOM.render(React.createElement(Slides_1.default, null), document.getElementById("root"));
        }
    };
});
