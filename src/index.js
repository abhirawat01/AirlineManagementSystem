const express =require('express')
const body_parser = require('body-parser')

const CityRepository = require('./repository/city-repository')

const {PORT} = require('./Config/Server')
const bodyParser = require('body-parser')
const setupAndStartServer = async () =>{

    //create new express server
    const app = express();

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:true}));

    app.listen(PORT,async ()=>{
        console.log(`Server Started at ${PORT}`);
        const entry = new CityRepository();
        entry.createCity({name:"New Delhi"});
        
    })

    
}

setupAndStartServer();