"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controls_1 = require("./controls");
function appendLogMessage(messages) {
    var log = controls_1.getLogControl();
    var message = messages.map(function (m) { return "<span>" + m + "</span>"; }).join('<br />');
    if (!log) {
        return;
    }
    var entry = document.createElement('p');
    entry.innerHTML = message;
    log.appendChild(entry);
}
exports.appendLogMessage = appendLogMessage;
