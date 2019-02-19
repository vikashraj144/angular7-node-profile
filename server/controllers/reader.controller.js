var knex = require('../config/knex');

module.exports.getBook = async (req,res) => {
    try {
        console.log('readers');
        var readersList = await knex('readers');
        res.send(readersList)
    } catch(e) {
        console.log(e);
    }
}