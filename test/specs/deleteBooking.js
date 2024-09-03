import { expect } from "chai";
import { deleteBooking } from "../function/deleteBooking.spec.js";

describe("Delete an Booking Function", () => {
    it("Positive - Success Delete a Booking by ID", async () => {
        const response = await deleteBooking();
        console.log("Status Code:", response.status);  // Menampilkan status kode
        console.log("Response Body:", response.body);  // Menampilkan isi dari response body

        // Memastikan status response sesuai harapan
        expect(response.status).to.equal(201);  // Pastikan kode yang diharapkan sesuai dengan yang ditentukan API
    }).timeout(10000);
})