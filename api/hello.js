export default (req, res) => {
    const { name = "World" } = req.query;
    res.status(200).send(
        `Hello ${name}!. You are using node ${process.version}`
    );
};

//Function for zeit.angira.net
