"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = __importDefault(require("socket.io"));
var io;
function enable(http) {
    io = socket_io_1.default(http);
}
exports.enable = enable;
function sendLog() {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    if (!!io) {
        io.emit('log', message);
    }
}
exports.sendLog = sendLog;
