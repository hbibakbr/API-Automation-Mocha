import request from "supertest";
import { baseUrl } from "../data/config.js";

export async function getBookingAll() {
    const response = await request(baseUrl)
        .get("/booking")

    return response
}

export async function getBookingbyId(bookingId) {
    const response = await request(baseUrl)
        .get(`/booking/${bookingId}`)
        .set('Accept', 'application/json');

    // console.log("Booking id: ", bookingId)
    return response
}

export const getBooking = {
    all : getBookingAll,
    id : getBookingbyId
}