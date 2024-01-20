const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compareTime} = require('../utils/helper');

class flightService {
  constructor() {

    this.flightRepository = new FlightRepository;
    this.flightRepository = new AirplaneRepository;

  }

  async craeteFlight(data){
    try {
        if(!compareTime(data.arrivalTime, data.departureTime)) {
            throw {error: 'Arrival time cannot be less than departure time'};
        }
        const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
        const flight = await this.flightrespository.createFlight({
            ...data, totalSeats:airplane.capacity 
        });
        return flight;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
  }

  async getAllFlight(data){
    try {
        const flights = await this.flightRepository.getAllFlight(data)
        return flights;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
  }

  async getFlight(flight_id){
    try {
        const flights = await this.flightRepository.getFlight(flight_id)
        return flights;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
  }

  async updateFlight(flight_id,data){
    try {
        const response = await this.flightRepository.updateFlight(flight_id,data)
        return response;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
  }
}


module.exports = flightService;