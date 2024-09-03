import request from "supertest";
import { baseUrl } from "../data/config.js"

export async function createToken() {
    const payload = {    
        "username" : "admin",
        "password" : "password123"
    }

    const response = await request(baseUrl)
        .post("/auth")
        .send(payload)
        .set('Content-Type', 'application/json')

    const token = (await response).body.token
    return response
}