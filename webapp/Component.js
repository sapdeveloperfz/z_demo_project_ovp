sap.ui.define(
    ["sap/ovp/app/Component"],
    function (Component) {
        "use strict";

        return Component.extend("nes.zovpbudget.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                console.log("Version 1.01 24.04.2026/08:04Uhr");
                console.log("Feature Global Filter aktiv");
                Component.prototype.init.apply(this, arguments);
            }
        });
    }
);