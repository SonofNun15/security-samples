"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var config_1 = __importDefault(require("./config"));
var sockets_1 = require("../comm/sockets");
function start(port) {
    var app = express_1.default();
    var server = http.createServer(app);
    config_1.default(app);
    sockets_1.enable(server);
    app.get('/', function (req, res) {
        debugger;
        var name = req.cookies.name;
        sockets_1.sendLog('GET => /', "Cookies: " + JSON.stringify(req.cookies));
        res.render('index', { name: name });
    });
    app.post('/cookie', function (req, res) {
        var name = req.body.name;
        sockets_1.sendLog("POST => /cookie: " + JSON.stringify(req.body));
        res.cookie('name', name);
        res.sendStatus(204);
    });
    app.get('/hello', function (req, res) {
        sockets_1.sendLog('GET => /hello', "Cookies: " + JSON.stringify(req.cookies));
        res.send(':wave:');
    });
    app.post('/poke', function (req, res) {
        sockets_1.sendLog("POST => /poke: " + JSON.stringify(req.body), "Cookies: " + JSON.stringify(req.cookies));
        res.send('ouch!');
    });
    app.get('/test', function (_req, res) {
        res.send('hi there');
        sockets_1.sendLog('GET => /test');
    });
    console.log("- listening on port " + port + " ");
    server.listen(port);
}
exports.start = start;
