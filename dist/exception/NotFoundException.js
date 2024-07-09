"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const BaseException_1 = require("./BaseException");
class NotFoundException extends BaseException_1.BaseException {
    constructor(message, data) {
        super(message, 404, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.NotFoundException = NotFoundException;
