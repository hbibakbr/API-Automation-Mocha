import { expect } from "chai";
import { updateBooking } from "../function/updateBooking.spec.js";
import { createToken } from "../function/createToken.spec.js";

describe("Update An Booking", () => {

    const bookingId = "3"; //Statis Booking id
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

    it("Success Update Booking by Id", async () => {
        const response = await updateBooking(bookingId, token)
        expect((await response).status).to.equal(200);
        console.log("Status Code:", (await response).status);
        console.log("Booking Id: ", bookingId);
        console.log("Response Body:", (await response).body);
        
    }).timeout(10000)
})