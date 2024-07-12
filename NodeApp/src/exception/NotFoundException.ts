import { BaseException } from "./BaseException";

class NotFoundException extends BaseException {
    constructor(message: string, data?: any) {
        super(message, 404, data);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export {
    NotFoundException
}