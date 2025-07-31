import { test, expect } from '@playwright/test';
let passengerDetails = require('../testdata/passengerDetails{0}.json');

test('should be able to get Passenger Status', async ({ request }) => {
    passengerDetails = {...passengerDetails, "maximum_passenger_count": 10};
    const response = await request.post("/passenger/status", {
        data: passengerDetails
    });
    console.log(passengerDetails);
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("passenger_count", 1);
    expect(responseBody).toHaveProperty("out_of_country", true);
    expect(responseBody).toHaveProperty("last_departure_datetime", "2024-01-01T15:00:00.000Z");
});
