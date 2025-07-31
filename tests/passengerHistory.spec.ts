import { test, expect } from '@playwright/test';
let passengerDetails = require('../testdata/passengerDetails{0}.json');

test('should be able to get Passenger History', async ({ request }) => {
    passengerDetails = { ...passengerDetails, "earliest_departure_date": "2023-01-01"};
    const response = await request.post("/passenger/history", {
        data: passengerDetails
    });
    console.log(passengerDetails);
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.travel_history[0]).toHaveProperty("scheduled_departure_datetime", "2024-01-01T10:00:00.000Z");
    expect(responseBody.travel_history[0]).toHaveProperty("scheduled_arrival_datetime", "2024-01-01T15:00:00.000Z");
    expect(responseBody.travel_history[0]).toHaveProperty("departure_location", "LHR");
    expect(responseBody.travel_history[0]).toHaveProperty("arrival_location", "LAX");
    expect(responseBody.travel_history[0]).toHaveProperty("carrier", "British Airways");
    expect(responseBody.travel_history[0]).toHaveProperty("route_id", "BA123");
    expect(responseBody.travel_history[0]).toHaveProperty("route_direction", "OUTBOUND");
    expect(responseBody.travel_history[0]).toHaveProperty("passenger_status", "DC");
    expect(responseBody.travel_history[0]).toHaveProperty("travel_mode", "Air Passenger");
    expect(responseBody).toHaveProperty("passenger_count", 1);

});

// test('should be able to search for Passenger Get', async ({ request }) => {
//     const response = await request.get("https://mocki.io/v1/c6536a31-b7b1-4686-90ff-bd33c669487d");
//     console.log(await response.json());
//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBe(200);
//     const responseBody = await response.json()
//     expect(responseBody.travel_history[0]).toHaveProperty("scheduled_departure_datetime", "2024-01-01T10:00:00.000Z");
//     expect(responseBody.travel_history[0]).toHaveProperty("scheduled_arrival_datetime", "2024-01-01T15:00:00.000Z");
//     expect(responseBody.travel_history[0]).toHaveProperty("departure_location", "LHR");
//     expect(responseBody.travel_history[0]).toHaveProperty("arrival_location", "LAX");
//     expect(responseBody.travel_history[0]).toHaveProperty("carrier", "British Airways");
//     expect(responseBody.travel_history[0]).toHaveProperty("route_id", "BA123");
//     expect(responseBody.travel_history[0]).toHaveProperty("route_direction", "OUTBOUND");
//     expect(responseBody.travel_history[0]).toHaveProperty("passenger_status", "DC");
//     expect(responseBody.travel_history[0]).toHaveProperty("travel_mode", "Air Passenger");
//     expect(responseBody).toHaveProperty("passenger_count", 1);
//
// });

test('should be able to get mac', async ({ request }) => {
    let passengerDetails1 = require('../testdata/macdetails.json');
    passengerDetails1 = {...passengerDetails1, "Hard disk size": "1 TB"};
    const response = await request.post("/objects", {
        data: passengerDetails1
    });
    console.log(passengerDetails1);
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.data).toHaveProperty("year", 2019);
    expect(responseBody).toHaveProperty("name", "Apple MacBook Pro 16");
});

