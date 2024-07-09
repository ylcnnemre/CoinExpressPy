"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = void 0;
const BaseException_1 = require("./BaseException");
class ConflictException extends BaseException_1.BaseException {
    constructor(message, data) {
        super(message, 409, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ConflictException = ConflictException;
