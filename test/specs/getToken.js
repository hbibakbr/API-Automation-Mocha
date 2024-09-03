import request from "supertest";
import { expect } from "chai";
import { describe } from "mocha";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get Token Scenario", () => {
    let token;
    const bookingId = 1;
    it("Positive - Success Get Token", async () => {
        const payload = {    
            "username" : "admin",
            "password" : "password123"
        }

        const response = await request(baseUrl)
            .post("/auth")
            .send(payload)
            .set('Content-Type', 'Application/json')
        
        token = (await response).body.token
        console.log("Status Code:", (await response).status);
        console.log("Response Body:", (await token));
        expect((await response).status).to.equal(200);
    }).timeout(5000)

    it("Positive - Success Implement Token", async () => {

        const updateBookingPayload = {    
            "firstname" : "James",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }

        const response = await request(baseUrl)
            .put("/booking/" + bookingId)
            .send(updateBookingPayload)
            .set("Content-Type", "application/json")
            .set("Cookie", `token=${token}`)
            .set("Accept", "application/json");

        // Debugging output response
        console.log("Status Code:", (await response).status);
        console.log("Response Body:", (await response).body);

        // Memastikan bahwa status respons adalah 200 OK
        expect((await response).status).to.equal(200);
    }).timeout(5000)

    it("Import Token Function", async () => {
        const response = await createToken()
        const token = response.body.token;

        console.log("Status Code:", (await response).status);
        console.log("Response Body:", (await token));

        // Jika hanya ingin token:
        
        console.log("Token:", token);
    }).timeout(5000)
})