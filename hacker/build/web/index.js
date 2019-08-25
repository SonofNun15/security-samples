"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
function start(port) {
    var app = express_1.default();
    config_1.default(app);
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.get('/test', function (_req, res) {
        res.send('hi there');
    });
    console.log("- listening on port " + port + " ");
    app.listen(port);
}
exports.start = start;
