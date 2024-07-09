
class BaseResponseMessageDto {
    message: "success" | "failed" = "success"
    data?: object = {}
    description?: any
}


export {
    BaseResponseMessageDto
}