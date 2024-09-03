import request from "supertest";
import { baseUrl } from "../data/config.js"
import { createToken } from "./createToken.spec.js";
import { createAnBooking } from "./createBooking.spec.js";

export async function deleteBooking() {
    const bookingId = await createAnBooking.bookingId(); // Mendapatkan id dari createBooking
    const token = await createToken();  // Mendapatkan token menggunakan fungsi createToken
    
    const response = await request(baseUrl)
        .delete(`/booking/${bookingId}`)
        .set('Content-Type', 'application/json')
        .set('Cookie', `token=${token}`);  // Menambahkan token sebagai cookie

    // Debugging tambahan untuk memastikan token valid
    console.log("Token:", token);
    onsole.log("Bookingid:", bookingId);
    
    return response;
}

export async function e2eDeleteBooking(bookingId, token) {
    // const token = await createToken();  // Mendapatkan token menggunakan fungsi createToken
    const response = await request(baseUrl)
        .delete(`/booking/${bookingId}`)
        .set('Content-Type', 'application/json')
        .set('Cookie', `token=${token}`);  // Menambahkan token sebagai cookie

    return response;
}

export const deleteAnBooking = {
    spec : deleteBooking,
    e2e : e2eDeleteBooking
}