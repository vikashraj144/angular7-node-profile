var knex = require('../config/knex');

module.exports.getBook = async (req,res) => {
    try {
        const bookID = req.query.bookID;
        if(bookID){
            var data = await knex('books').where({'bookID':bookID});
        }else{
            var data = await knex('books');
        }        
        res.send(data)
    } catch(e) {
        console.log(e);
    }
}

module.exports.updateBook = async (req,res) => {
    try {
        console.log(req.body);
        const bookID = req.body.bookID;
        var data = await knex('books')
                    .where('bookID','=',bookID)
                    .update({ 
                        title: req.body.title, 
                        author: req.body.author,
                        publicationYear: req.body.publicationYear 
                    });
        console.log(data,'data');
        res.send({"status":200,
                    "message":"update success"});
    } catch(e) {
        console.log(e);
    }
}

module.exports.addBook = async (req,res) => {
    try {
        console.log(req.body);
        var data = await knex('books')
                    .insert({ 
                        title: req.body.title, 
                        author: req.body.author,
                        publicationYear: req.body.publicationYear 
                    });
        console.log(data,'data');
        res.send({"status":200,
                    "message":"Book added successfull"});
    } catch(e) {
        console.log(e);
    }
}