"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var bodyParser = __importStar(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
function configure(app) {
    _serveAssets(app);
    _initBodyParser(app);
    _initCookieParser(app);
    _initViewRendering(app);
}
exports.default = configure;
function _serveAssets(app) {
    app.use(express.static('assets'));
}
function _initBodyParser(app) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
}
function _initCookieParser(app) {
    app.use(cookie_parser_1.default());
}
function _initViewRendering(app) {
    app.set('view engine', 'pug');
    app.set('views', 'views');
}
