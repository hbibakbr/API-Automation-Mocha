import request from "supertest";
import { baseUrl } from "../data/config.js"

export async function createBooking() {
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

    // Mengirim request POST 
    const response = await request(baseUrl)
        .post("/booking")
        .send(payload)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

    // Debugging response untuk memastikan request berhasil
    // console.log("Create a Booking")
    // console.log("Status Code:", response.status);
    // console.log("Response Body:", response.body);

    // Ambil bookingId dari response
    // const bookingId = response.body.bookingid; // Pastikan ini sesuai dengan respons API
    return response; // Kembalikan bookingId
}

export async function createBookingById() {
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
        .set("Accept", "application/json");
    // Debugging response untuk memastikan request berhasil
    console.log("Create a Booking")
    console.log("Status Code:", response.status);
    console.log("Response Body:", response.body);

    // Ambil bookingId dari response
    const bookingId = response.body.bookingid; // Pastikan ini sesuai dengan respons API
    return bookingId; // Kembalikan bookingId
}

export const createAnBooking = {
    booking : createBooking,
    bookingId : createBookingById
}