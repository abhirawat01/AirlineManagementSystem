const {Flight} = require('../models/index')
const {Op} = require('sequelize')

class FlightRepository {

    #createFilter(data){
        let Filter = {};
        if (data.arrivalAirportId){
            Filter.arrivalAirportId = data.arrivalAirportId;
        }

        if (data.departureAirportId){
            Filter.departureAirportId = data.departureAirportId;
        }

        let priceFilter = [];
        if(data.minprice){
            priceFilter.push({price : {[{Op:gte}] : data.minprice }});
        }

        if(data.maxprice){
            priceFilter.push({price : {[{Op:lte}] : data.maxprice }});
        }

        Object.assign(Filter,{[{Op:and}] : priceFilter});

        return Filter;
    }

    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw (error)
        }
    }

    async getFlight(flight_id){
        try{
            const response = await Flight.findByPk(flight_id);
            return response;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw (error)
        }
    }

    async getAllFlight(Filter){
        try{
            const filterObject = this.#createFilter(Filter);
            const flight = await Flight.findAll({
                where : filterObject
            });
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw (error)
        }
    }

    async updateFlight (flight_id,data){
        try {
            await Flight.update(data,{
                where: {
                    id :flight_id
                }
            });
            return true;
        } catch (error) {
            
        }
    }

}

module.exports = FlightRepository;