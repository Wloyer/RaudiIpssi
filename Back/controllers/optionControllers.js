const Option = require('../models/optionModel')

exports.CreateOption = async(req,res) => {
    let option = req.body 
    await Option.create(option)
    res.status(201).json("Option créée")
};

exports.UpdateOption = async(req,res) => {
    let id = req.params.id
    let UpdateOption = req.body

    let option = await Option.update({UpdateOption},{
        where: {
            id: idO
        }
    })
    res.status(200).json(option)
}