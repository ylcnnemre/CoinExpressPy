import { BaseException } from "./BaseException";

class ConflictException extends BaseException {
    constructor(message: string, data?: any) {
        super(message, 409, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export {
    ConflictException
}