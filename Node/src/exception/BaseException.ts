class BaseException extends Error {
    statusCode: number
    data: any
    constructor(message: string, statusCode: number, data?: any) {
        super(message);
        this.name = this.constructor.name;
        this.data = data
        this.statusCode = statusCode
    }
}

export {
    BaseException
}