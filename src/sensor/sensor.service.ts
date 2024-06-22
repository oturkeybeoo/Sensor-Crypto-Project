import { Injectable } from "@nestjs/common";
import { CommonService } from "src/common.service";

@Injectable()
export class SensorService {
    constructor(
        private readonly commonService: CommonService,
    ) {

    }

    getTemperature() {
        return this.commonService.encrypt("TEST")
    }

    getMoisture() {
        
    }
}
