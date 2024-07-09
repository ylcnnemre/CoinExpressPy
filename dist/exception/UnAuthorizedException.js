"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
const BaseException_1 = require("./BaseException");
class UnauthorizedException extends BaseException_1.BaseException {
    constructor(message, data) {
        super(message, 401, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.UnauthorizedException = UnauthorizedException;
