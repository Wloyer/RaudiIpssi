const Car = require('../models/carModel')

exports.CreateCar = async(req,res)=>{
    let car = req.body 
    await Car.create(car)
    res.status(201).json("voiture créée")
};

exports.UpdateCar = async(req,res)=>{
    let id = req.params.id
    let UpdateCar = req.body

    let car = await Car.update({UpdateCar},{
        where: {
            id: idC
        }
    })
    res.status(200).json(car)
}