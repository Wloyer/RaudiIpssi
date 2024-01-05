const Car = require('../models/carModel')

exports.getAllCar = async(req,res) => {
    let allCar = await Car.findAll();
    res.status(200).json({
        message:"voici toutes les voitures",
        car:allCar
    })
};

exports.createCar = async(req,res)=>{
    let car = req.body 
    await Car.create(car)
    res.status(201).json("voiture créée")
};

exports.updateCar = async(req,res)=>{
    let idC = req.params.id
    let UpdateDataCar = req.body

    let car = await Car.update(UpdateDataCar,{
        where: {
            id: idC,
        }
    })
    res.status(200).json(car)
};

exports.deleteCar = async(req,res) => {
    let idC = req.params.id
    
    let deleteCar = await Car.destroy({
        where: {
            id: idC
        }
    })
    res.status(200).json(deleteCar)
}