import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from '../login/auth.guard';
import { SensorService } from "./sensor.service";

@Controller('sensor')
export class SensorController {
    constructor(
        private readonly sensorService: SensorService,
    ) {
        
    }
    
    @UseGuards(AuthGuard)
    @Get("/get_temperature")
    async getTemperature() {
        let res = await this.sensorService.getTemperature()
        return res
    }

    @UseGuards(AuthGuard)
    @Get("/get_moisture")
    getMoisture() {
        
    }

}