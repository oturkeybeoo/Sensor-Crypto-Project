import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from '../login/auth.guard';

@Controller('sensor')
export class SensorController {
    constructor() {

    }
    
    @UseGuards(AuthGuard)
    @Post("/get_temperature")
    async getTemperature(@Body() res) {
    
    }

    @UseGuards(AuthGuard)
    @Post("/get_moisture")
    getMoisture(@Body() res) {
        
    }

}