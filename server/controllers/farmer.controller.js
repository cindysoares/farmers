const db = require("../models")
const Farmer = db.farmer
const Op = db.Sequelize.Op

exports.searchFarmers = (request, response) => {
    const nameOrDoc = request.query.search
    var condition = nameOrDoc ? { name: { [Op.iLike]: `%${nameOrDoc}%` } } : null

    // If the search has more than one result, return any result that match’s.
    Farmer.findAll( {
        where: condition,
        limit: 1
    } ).then( data => {
        response.send(data[0])    
    }).catch( err => {
        response.status(500).send({
            message: err.message
        })
    })

};