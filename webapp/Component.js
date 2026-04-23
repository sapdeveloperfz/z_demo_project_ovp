sap.ui.define(
    ["sap/ovp/app/Component"],
    function (Component) {
        "use strict";

        return Component.extend("nes.zovpbudget.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                console.log("Version 1.01 23.04.2026/11:18 Uhr");
                Component.prototype.init.apply(this, arguments);
            }
        });
    }
);