import { test, expect } from '@playwright/test';
const passengerDetails = require('../testdata/passengerDetails{0}.json');

test('should be able to search for Passenger', async ({ request }) => {
    const response = await request.post("/passenger/search", {
        data: passengerDetails
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("passenger_count", 1);

});

test('should be able to search for Passenger Get', async ({ request }) => {
    const response = await request.get("v1/2974b476-d695-4bc5-96df-f0a67e5145df");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody).toHaveProperty("passenger_count", 1);

});
