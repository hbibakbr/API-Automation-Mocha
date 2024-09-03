import request from "supertest";
import { baseUrl } from "../data/config.js";

export async function updateBooking(bookingId, token) {
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
    //const token = await createToken()
    const response = await request(baseUrl)
        .put("/booking/" + bookingId)
        .send(updateBookingPayload)
        .set("Content-Type", "application/json")
        .set("Cookie", `token=${token}`)
        .set("Accept", "application/json");
    
    return response
}