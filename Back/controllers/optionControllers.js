const Option = require('../models/optionModel')


exports.getAllOption = async(req,res)=>{
    let allOption = await Option.findAll();
    res.status(200).json({
        message:"voici toutes les options",
        option: allOption
    })
};

exports.CreateOption = async(req,res) => {
    let option = req.body 
    await Option.create(option)
    res.status(201).json("Option créée")
};

exports.UpdateOption = async(req,res) => {
    let idO = req.params.id
    let UpdateOption = req.body

    let option = await Option.update({UpdateOption},{
        where: {
            id: idO
        }
    })
    res.status(200).json(option)
};

exports.DeleteOption = async(req,res)=>{
    idO = req.params.id
    let deleteOption = await Option.destroy({
        where: {
            id: idO
        }
    })
    res.status(200).json(deleteOption)
}