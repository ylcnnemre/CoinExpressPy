import { BaseException } from "./BaseException";

class UnauthorizedException extends BaseException {
    constructor(message: string, data?: any) {
        super(message, 401, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}


export {
    UnauthorizedException
}