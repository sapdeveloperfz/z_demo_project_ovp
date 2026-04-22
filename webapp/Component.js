sap.ui.define(
    ["sap/ovp/app/Component"],
    function (Component) {
        "use strict";

        return Component.extend("nes.zovpbudget.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                console.log("Version 1.01 22.04.2026/15:41Uhr");
                console.log("Feature Global Filter aktiv");
                Component.prototype.init.apply(this, arguments);
            }
        });
    }
);