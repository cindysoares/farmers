const db = require("../models")
const Farmer = db.farmer
const Op = db.Sequelize.Op

exports.searchFarmers = (request, response) => {
    const nameOrDoc = request.query.search
    var condition = nameOrDoc ? { name: { [Op.iLike]: `%${nameOrDoc}%` } } : null

    Farmer.findAll( {
        where: condition
    } ).then( data => {
        response.send(data)
    }).catch( err => {
        response.status(500).send({
            message: err.message
        })
    })

};