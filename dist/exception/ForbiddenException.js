"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = void 0;
const BaseException_1 = require("./BaseException");
class ForbiddenException extends BaseException_1.BaseException {
    constructor(message, data) {
        super(message, 403, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ForbiddenException = ForbiddenException;
