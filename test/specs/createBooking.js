import request from "supertest";
import { expect } from "chai";
import { createAnBooking, createBooking } from "../function/createBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe ("Create Booking Scenario", () => {
    it("Positive - Success Create Booking", async () => {
        const payload = {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }

        // Mengirim request POST dengan header yang diperbaiki
        const response = await request(baseUrl)
            .post("/booking")
            .send(payload)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json"); // Header Accept untuk memastikan format response

    // Debugging response untuk memastikan request berhasil
    console.log("Status Code:", response.status);
    console.log("Response Body:", response.body);

    // Cek bahwa status response adalah 200
    expect((await response).status).to.equal(200);
    }).timeout(5000);
})

// ------------------------------------------- //

describe("Create Booking Scenario by Function", () => {
    it("Positive - Success Create a Booking Function", async () => {
        const response = await createAnBooking.booking()

        // Assertion Chai
        expect((await response).status).to.equal(200);
        console.log("Status Code:", (await response).status);
        console.log("Response Body:", (await response).body);
    }).timeout(5000)

    it("Positive - Success Create a Booking Id", async () => {
        const response = await createAnBooking.bookingId()
        console.log("Response Body:", (await response));  // Menampilkan isi dari response body
        console.log("Booking Id:", response); // Jika hanya ingin Booking id:
    }).timeout(5000)
})