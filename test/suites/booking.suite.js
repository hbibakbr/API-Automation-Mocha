// Get Token
// Get Booking

import { expect } from "chai";
import { createAnBooking } from "../function/createBooking.spec.js";
import { getBooking } from "../function/getBooking.spec.js";
import { createToken } from "../function/createToken.spec.js";
import { deleteAnBooking } from "../function/deleteBooking.spec.js";
import { updateBooking } from "../function/updateBooking.spec.js";



describe("End to End Testing Booking", () => {
    let bookingId;
    let token;
    before(async function () {
        this.timeout(10000);
        
        try {
            const responseToken = await createToken();
            expect(responseToken.status).to.equal(200); // Validasi status code
            token = responseToken.body.token;  // Ambil token dari response
            expect(token).to.be.a('string');   // Pastikan token adalah string
            console.log("Token:", token);  
        } catch (error) {
            console.error("Error in before hook:", error);
            throw error;  // Pastikan error dilemparkan agar Mocha mengetahui adanya kegagalan
        }
    });

 /*   it("Get Token", async () => {
        const responseToken = await createToken();
        expect(responseToken.status).to.equal(200); // Validasi status code
        token = responseToken.body.token;  // Ambil token dari response
        expect(token).to.be.a('string');   // Pastikan token adalah string
        console.log("Token:", token);  
    }).timeout(10000)*/

    it("Success Create An Booking", async () => {
        const response = await createAnBooking.booking()
        expect((await response).status).to.equal(200)
        bookingId = (await response).body.bookingid
        console.log("Status Code:", (await response).status);
        console.log("Booking Id: ", bookingId);
        console.log("Response Body:", (await response).body); 
    }).timeout(10000)

    it("Succes Get Booking by Id", async () => {
        const response = await getBooking.id(bookingId)
        expect((await response).status).to.equal(200)
        console.log("Status Code:", (await response).status);
        console.log("Booking Id: ", bookingId);
        console.log("Response Body:", (await response).body);
    }).timeout(10000)

    it("Success Update Booking by Id", async () => {
        const response = await updateBooking(bookingId, token)
        expect((await response).status).to.equal(200);
        console.log("Status Code:", (await response).status);
        console.log("Booking Id: ", bookingId);
        console.log("Response Body:", (await response).body);
        
    }).timeout(10000)

    it("Positive - Success Delete a Booking by ID", async () => {
        const response = await deleteAnBooking.e2e(bookingId, token)
        expect((await response).status).to.equal(201);
        console.log("Status Code:", (await response).status);  // Menampilkan status kode
        console.log("Booking Id: ", bookingId);
        console.log("Response Body:", (await response).body); // Menampilkan isi dari response body
    }).timeout(10000);
})