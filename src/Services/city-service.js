const {CityRapository} = require('../repository/index')

class CityService{

    constructor(){
        this.cityRapository = new CityRapository()
    }

    async createCity(data) {
        try {
            const city = await this.cityRapository.createCity(data)
            return city;
        } catch (error) {
            console.log("Something went wrong on Service Layer");
            throw (error)
        }
    }

    async deleteCity(city_Id) {
        try {
            const response = await this.cityRapository.deleteCity(city_Id)
            return response;
        } catch (error) {
            console.log("Something went wrong on Service Layer");
            throw (error)
        }
    }

    async updateCity(city_Id,data) {
        try {
            const response = await this.cityRapository.updateCity(city_Id,data)
            return response;
        } catch (error) {
            console.log("Something went wrong on Service Layer");
            throw (error)
        }
    }

    async getCity(city_Id) {
        try {
            const city = await this.cityRapository.getCity(city_Id)
            return city;
        } catch (error) {
            console.log("Something went wrong on Service Layer");
            throw (error)
        }
    }

    async getAllCities() {
        try {
            const cities = await this.cityRapository.getAllCities()
            return cities;
        } catch (error) {
            console.log("Something went wrong on Service Layer");
            throw (error)
        }
    }

}

module.exports = CityService;