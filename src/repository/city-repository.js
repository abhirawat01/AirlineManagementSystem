const {City} = require('../models/index')

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw (error)
        }
    }

    async deleteCity(city_id){
        try{
            await City.destroy({
                where: {
                    id : city_id
                }
            });
            return true;
        }catch(error){
            throw (error)
        }
    }

}

module.exports = CityRepository