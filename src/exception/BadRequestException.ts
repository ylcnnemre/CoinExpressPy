import { BaseException } from "./BaseException";

class BadRequestException extends BaseException {
    constructor(message: string, data?: any) {
        super(message, 400, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export {
    BadRequestException
}