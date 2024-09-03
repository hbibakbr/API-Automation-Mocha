// API automation menggunakan ES module js

import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get All Booking ID", () => {
    it('Positive - Success Get All Booking ID', async () => {
        const response = await request(baseUrl)
            .get("/booking")
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    }).timeout(50000)

    it('Positive - Success Get Detail Booking by id', async () => {
        // Tambahkan header Accept untuk menentukan format response
        const bookingId = "1";
        const response = await request(baseUrl)
            .get(`/booking/${bookingId}`)
            .set('Accept', 'application/json'); // Menentukan format response
        
        // Debug status code dan body untuk memahami error
        console.log("Status Code:", response.status);
        console.log("Response Body:", response.body);

        // Cek bahwa status code harus 200
        expect((await response).status).to.equal(200);
    }).timeout(50000);
})

// ------------------------------------------- //

describe("Get Booking by Function", () => {
    it("Positive - Success Get All Booking Id with Function", async () => {
        const response = await getBooking.all()
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    }).timeout(5000)

    it("Positive - Success Get Booking by id with Function", async () => {
        const response = await getBooking.id()
        expect((await response).status).to.equal(200)
        console.log("Status Code:", (await response).status);
        console.log("Response Body:", (await response).body);
    }).timeout(5000)
})