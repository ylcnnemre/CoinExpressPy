"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
class BaseException extends Error {
    constructor(message, statusCode, data) {
        super(message);
        this.name = this.constructor.name;
        this.data = data;
        this.statusCode = statusCode;
    }
}
exports.BaseException = BaseException;
