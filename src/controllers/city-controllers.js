const {CityService} = require('../Services/index')

const cityService = new CityService();

const create = async (req,res) =>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully Created a city",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            error : {}
        });
    }

}

// DELETE. -> /city/:id
const destroy = async (req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully deleted a city",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city",
            error : {}
        });
    }
}

const update = async (req,res) =>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data : response,
            success : true,
            message : "Successfully Updated a city",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update a city",
            error : {}
        });
    }
}

const get = async (req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully Get a city",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to Get a city",
            error : {}
        });
    }
}


const getAll = async (req,res) =>{
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data : cities,
            success : true,
            message : "Successfully Get all Cities",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to Get all Cities",
            error : {}
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}