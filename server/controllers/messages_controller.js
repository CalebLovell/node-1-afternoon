messages = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        res.status(200).send(messages)
    },
}