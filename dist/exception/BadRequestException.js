"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const BaseException_1 = require("./BaseException");
class BadRequestException extends BaseException_1.BaseException {
    constructor(message, data) {
        super(message, 400, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.BadRequestException = BadRequestException;
