const Option = require('../models/optionModel')


exports.getAllOption = async(req,res)=>{
    let allOption = await Option.findAll();
    res.status(200).json({
        message:"voici toutes les options",
        option: allOption
    })
};

exports.getOption = async (req, res) => {
    const option = await Option.findByPk(req.params.id);

    res.status(200).json({
        message: "Voici l\'option demandée",
        option: option
    });
};

exports.createOption = async(req,res) => {
    let option = req.body 
    await Option.create(option)
    res.status(201).json("Option créée")
};

exports.updateOption = async (req, res) => {
    let idO = req.params.id;
    let updateOption = req.body;

    try {
        let option = await Option.update(updateOption, {
            where: {
                id: idO
            }
        });

        res.status(200).json(option);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteOption = async(req,res)=>{
    idO = req.params.id
    let deleteOption = await Option.destroy({
        where: {
            id: idO
        }
    })
    res.status(200).json(deleteOption)
}