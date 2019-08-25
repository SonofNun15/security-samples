"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var log_1 = require("./log");
var socket = socket_io_client_1.default();
socket.on('log', function (messages) {
    log_1.appendLogMessage(messages);
});
