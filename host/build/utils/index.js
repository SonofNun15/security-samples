"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maybeParseInt(value) {
    if (value) {
        return parseInt(value);
    }
    else {
        return NaN;
    }
}
exports.maybeParseInt = maybeParseInt;
