import { Body, Controller, Post } from "@nestjs/common";

@Controller('sensor')
export class SensorController {
    constructor() {

    }

    @Post("/get_temperature")
    async getTemperature(@Body() res) {
    
    }

    @Post("/get_moisture")
    getMoisture(@Body() res) {
        
    }

}