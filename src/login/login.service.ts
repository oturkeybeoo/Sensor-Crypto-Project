import { Injectable } from "@nestjs/common";

const crypto = require('crypto')

let users = [
    {
        username: "vinh",
        password: ""
    }
]
@Injectable()
export class LoginService {
    constructor() {

    }

    login(username, password) {

    }
}
