import amqp from "amqplib"

const rabbitConnect = () => {
    const connection = amqp.connect("amqp://guest:12345*x@localhost")
    return connection
}

export {
    rabbitConnect
}