const Car = require('../models/carModel')

exports.getAllCar = async(req,res) => {
    let allCar = await Car.findAll();
    res.status(200).json({
        message:"voici toutes les voitures",
        car:allCar
    })
};

exports.CreateCar = async(req,res)=>{
    let car = req.body 
    await Car.create(car)
    res.status(201).json("voiture créée")
};

exports.UpdateCar = async(req,res)=>{
    let idC = req.params.id
    let nameC = req.params.name
    let doorC = req.params.door
    let engineC = req.params.engine
    let seating_capacityC = req.params.seating_capacity
    let UpdateDataCar = req.body

    let car = await Car.update(UpdateDataCar,{
        where: {
            id: idC,
            name: nameC,
            door: doorC,
            engine: engineC,
            seating_capacity: seating_capacityC
        }
    })
    res.status(200).json(car)
};

exports.DeleteCar = async(req,res) => {
    let idC = req.params.id
    
    let deleteCar = await Car.destroy({
        where: {
            id: idC
        }
    })
    res.status(200).json(deleteCar)
}