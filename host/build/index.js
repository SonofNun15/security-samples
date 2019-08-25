"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = require("./web");
var utils_1 = require("./utils");
var default_port = 3000;
var port = utils_1.maybeParseInt(process.env.PORT) || default_port;
web_1.start(port);
