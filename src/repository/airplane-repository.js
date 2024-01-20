const {airplane} = require('../models/index')

class AirplaneRepository{
    
    async getAirplane(id){
        try {
            const Airplane = await airplane.findByPk(id)
            return Airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw (error)
        }
    }
}

module.exports = AirplaneRepository;
