import { Body, Controller, Post } from "@nestjs/common";

@Controller('login')
export class LoginController {
    constructor() {

    }

    @Post("/login")
    async login(@Body() res) {
    
    }

    @Post("/register")
    register(@Body() res) {

    }

}