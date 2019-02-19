var knex = require('../config/knex');

module.exports.getBook = async (req,res) => {
    try {
        console.log('Books');
        var data = await knex('books');
        console.log(data,'data');
        res.send(data)
        // var data = await knex('books').where({'isactive':true});
        // res.send([
        //     { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953 },
        //     { bookID: 2, title: 'Green Eggs and Ham', author: 'Dr. Seuss', publicationYear: 1960 },
        //     { bookID: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', publicationYear: 1963 },
        //     { bookID: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937 },
        //     { bookID: 5, title: 'Curious George', author: 'H. A. Rey', publicationYear: 1941 },
        //     { bookID: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', publicationYear: 1865 },
        // ])
    } catch(e) {
        console.log(e);
    }
}