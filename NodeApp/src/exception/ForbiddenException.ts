import { BaseException } from "./BaseException";

class ForbiddenException extends BaseException {
    constructor(message: string, data?: any) {
        super(message, 403, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}


export {
    ForbiddenException
}